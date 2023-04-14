import imaginaition_logging
import sys
from rgbprint import gradient_print, Color
import cut
import help

appName = None
try:
    appName = sys.argv[1]
except:
    pass

if appName == None:
    imaginaition_logging.error("No app name provided")
    exit()

help_commands = ["help", "--help", "-h"]
if appName in help_commands:
    help.run()

if appName == "cut":
    imaginaition_logging.emphasis("Running app: cut")
    cut.run(sys.argv)