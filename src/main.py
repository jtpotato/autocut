import os
import sys

from subtitle import makeSubtitle


def cutVideo(filename: str):
    os.system(f"auto-editor {filename} --export final-cut-pro -o {filename}.fcpxml")


if len(sys.argv) > 1:
    if sys.argv[1] == "cut":
        args = sys.argv[2:]
        for filename in args:
            cutVideo(filename)
        print("Complete! 🚀")
    
    elif sys.argv[1] == "subtitle":
        if len(sys.argv) > 2:
            print("This could take a while. AI is difficult!")
            makeSubtitle(sys.argv[2])
            print("Complete! 🚀")
        else:
            print("Not enough arguments. Are you missing a filename?")
    
    else:
        print("Usage: autocut <command> [args]")
else:
    print("Usage: autocut <command> [args]")
