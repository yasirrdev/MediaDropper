from urllib.parse import urlparse

def validate_url(url):
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except:
        return False

def allowed_formats():
    return ['mp3', 'wav', 'mp4', 'avi', 'mkv']
