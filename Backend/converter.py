import uuid
import os
import subprocess

DOWNLOAD_FOLDER = "downloads"
COOKIES_FILE = "cookies.txt"

def download_and_convert(url, fmt):
    video_id = str(uuid.uuid4())
    base_path = os.path.join(DOWNLOAD_FOLDER, video_id)
    os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)

    # 1. Descarga con yt-dlp + cookies
    download_file = f"{base_path}.%(ext)s"
    subprocess.run([
        "yt-dlp",
        "--cookies", COOKIES_FILE,
        "-f", "bestaudio/best" if fmt in ["mp3", "wav", "ogg", "flac", "aac"] else "bestvideo+bestaudio",
        "-o", download_file,
        url
    ], check=True)

    # 2. Buscar archivo descargado real
    downloaded_file = None
    for f in os.listdir(DOWNLOAD_FOLDER):
        if f.startswith(video_id):
            downloaded_file = os.path.join(DOWNLOAD_FOLDER, f)
            break

    if not downloaded_file:
        raise FileNotFoundError("Archivo descargado no encontrado.")

    # 3. Convertir con ffmpeg
    final_file = os.path.join(DOWNLOAD_FOLDER, f"{video_id}.{fmt}")
    subprocess.run([
        "ffmpeg", "-y", "-i", downloaded_file, final_file
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    os.remove(downloaded_file)

    return final_file, f"{video_id}.{fmt}"
