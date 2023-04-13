import { useCallback, useEffect, useRef, useState } from "react";

function Home() {
  const cursorTargetRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const [text, setText] = useState("Hello World");

  const keyDownHandler = (e: any) => {
    let event: KeyboardEvent = e;

    if (event.key.length === 1) {
      setText((text) => text + event.key);
    } else if (event.key === "Backspace") {
      setText((text) => text.slice(0, -1));
    }
  };

  useEffect(() => {
    if (cursorTargetRef.current && cursorRef.current) {
      let spaceOffset = 0;
      if (text.endsWith(" ")) spaceOffset = 10;

      cursorRef.current.style.left = cursorTargetRef.current.offsetLeft + spaceOffset + "px";
      cursorRef.current.style.top = cursorTargetRef.current.offsetTop + "px";
    }
  }, [text]);

  useEffect(() => {
    console.log("how many times is this being run");

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className="bg-black w-screen h-screen text-white">
        <p className="font-mono font-bold">
          {text}
          <span ref={cursorTargetRef} />
        </p>
        <span
          className="w-2 h-6 animate-pulse transition-all duration-75 bg-white block absolute"
          ref={cursorRef}
        />
      </div>
    </>
  );
}

export default Home;
