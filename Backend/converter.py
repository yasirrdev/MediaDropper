import yt_dlp
import uuid
import os
import subprocess

DOWNLOAD_FOLDER = "downloads"
COOKIES_FILE = "cookies.txt"

def download_and_convert(url, fmt):
    video_id = str(uuid.uuid4())
    base_path = os.path.join(DOWNLOAD_FOLDER, video_id)
    output_template = f"{base_path}.%(ext)s"

    os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)

    ydl_opts = {
        'format': 'bestaudio/best' if fmt in ['mp3', 'wav', 'ogg', 'flac', 'aac'] else 'bestvideo+bestaudio',
        'outtmpl': output_template,
        'quiet': False,
        'nocheckcertificate': True,
        'cookies': COOKIES_FILE
    }

    try:
        print("[yt-dlp] Starting download")
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            title = info.get('title', video_id)
            downloaded_file = ydl.prepare_filename(info)

        final_file = f"{base_path}.{fmt}"
        print(f"[ffmpeg] Converting to {fmt}")

        subprocess.run([
            'ffmpeg', '-y', '-i', downloaded_file, final_file
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        os.remove(downloaded_file)
        filename = f"{title}.{fmt}"
        print(f"[Success] File created: {filename}")
        return final_file, filename

    except Exception as e:
        print(f"[ERROR] {e}")
        raise
