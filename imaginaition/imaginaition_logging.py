from rgbprint import Color, gradient_print


def error(message):
    gradient_print(message, start_color=Color.red, end_color=Color.deep_pink)

def emphasis(message, intensity = 1):
    if intensity == 1:
        gradient_print(message, start_color=0xf1cb85, end_color=0xe786dd)
    if intensity == 2:
        gradient_print(message, start_color=0x7274f9, end_color=0xb5f7f6)

def feedback(message):
    gradient_print(message, start_color=Color.lime, end_color=Color.green)

def neutral(message):
    gradient_print(message, start_color=0xd0a7ca, end_color=0xcdb996)

def indent(number):
    return "    " * number