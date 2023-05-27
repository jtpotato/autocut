from datetime import timedelta


def makeSubtitle(filename: str):
    import ssl

    ssl._create_default_https_context = ssl._create_unverified_context
    import whisper

    model = whisper.load_model("base.en")
    result = model.transcribe(filename)
    makeSrt(filename, result["segments"])

def makeSrt(filename: str, segments: list):
    srtContents = ""

    for segment in segments:
        startTime = str(0) + str(timedelta(seconds=int(segment["start"]))) + ",000"
        endTime = str(0) + str(timedelta(seconds=int(segment["end"]))) + ",000"
        text = segment["text"]
        segmentId = segment["id"] + 1
        segment = f"{segmentId}\n{startTime} --> {endTime}\n{text[1:] if text[0] == ' ' else text}\n\n"
        srtContents += segment
    
    with open(f"{filename}.srt", "w") as f:
        f.write(srtContents)