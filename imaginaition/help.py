from imaginaition.imaginaition_logging import *

def run(args: list):
    if (len(args) == 2):
        emphasis("Imaginaition Help:")
        neutral(indent(1) + "-h, --help, help: Shows this help page. Welcome! Run help <app> to see the help page for each app.\n")
        emphasis(indent(1) + "Apps:", 2)
        emphasis(indent(2) + "cut: Cuts videos in a folder", 2)
        emphasis(indent(2) + "imagine: [Development] Uses Stable Diffusion in the cloud to generate an image.", 2)
        exit()

    if args[2] == "cut":
        emphasis("Imaginaition Help: cut")
        neutral(indent(1) + "cut <folder>: Cuts all videos in a folder and puts them in a folder called cut-videos")
        
    if args[2] == "imagine":
        emphasis("Imaginaition Help: imagine")
        neutral(indent(1) + "imagine <image> [args]: Uses Stable Diffusion in the cloud to generate an image.")
        neutral(indent(2) + "--style-override, -so: Overrides the default Imagainaition style.")