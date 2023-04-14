from imaginaition.imaginaition_logging import *
import sys
from rgbprint import gradient_print, Color
import imaginaition.cut
import imaginaition.help

def main():
    appName = None
    try:
        appName = sys.argv[1]
    except:
        pass

    if appName == None:
        error("No app name provided")
        exit()

    help_commands = ["help", "--help", "-h"]
    if appName in help_commands:
        imaginaition.help.run(sys.argv)

    if appName == "cut":
        emphasis("Running app: cut")
        imaginaition.cut.run(sys.argv)

if __name__ == "__main__":
    main()