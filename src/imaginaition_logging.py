from rgbprint import Color, gradient_print


def error(message):
    gradient_print(message, start_color=Color.red, end_color=Color.deep_pink)

def emphasis(message):
    gradient_print(message, start_color=0xf1cb85, end_color=0xe786dd)

def feedback(message):
    gradient_print(message, start_color=Color.lime, end_color=Color.green)

def neutral(message):
    gradient_print(message, start_color=0xd0a7ca, end_color=0xcdb996)

def indent(number):
    return "    " * number