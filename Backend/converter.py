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
        'quiet': True,
        'cookies': COOKIES_FILE,  
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        title = info.get('title', video_id)
        downloaded_file = ydl.prepare_filename(info)

    final_file = f"{base_path}.{fmt}"

   
    subprocess.run([
        'ffmpeg', '-y', '-i', downloaded_file, final_file
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    os.remove(downloaded_file)
    filename = f"{title}.{fmt}"
    return final_file, filename
