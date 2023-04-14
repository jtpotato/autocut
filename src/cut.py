import glob
import os
from imaginaition_logging import *
import subprocess


def get_videos_in_folder(folder: str):
    extensions = ['.mp4', '.avi', '.mov', '.m4v', '.mkv']  # add more extensions as needed
    video_files = []
    for ext in extensions:
        video_files.extend(glob.glob(os.path.join(folder, f'*{ext}')))
    return video_files


def run(arguments: list):
    input_folder = None
    try:
        input_folder = arguments[2]
    except:
        error("No input folder provided")
        exit()
    if input_folder:
        videos = get_videos_in_folder(input_folder)
        for video in videos:
            try:
                feedback(f"Cutting video: {video}")
                os.makedirs("./cut-videos", exist_ok=True)
                subprocess.run(["auto-editor", f"{video}", "--margin", "0.05sec", "-o", f"./cut-videos/{os.path.basename(video)}"], check=True)
            except Exception as e:
                error(f"Error cutting video: {e}")
        neutral("Finished cutting videos. Import them into your favourite editor :D")
