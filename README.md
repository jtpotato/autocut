# autocut
A layer on top of https://github.com/WyattBlue/auto-editor, built with Node.js

Sometimes, there can be too many choices. `autocut` removes these choices for you. `autocut cut` features only *one* argument - the file you're trying to cut. So you can spend less time looking up documentation, and more time *creating stuff* ✨

---

## Usage
`autocut` requires Node.js and Python >= 3 to be installed on your system.
- Install `autocut` with `npm install -g https://github.com/jtpotato/autocut` (or your package manager of choice)
- Run `autocut setup`

You're ready!

## Examples
```bash
autocut cut ./*.mov # Cuts all .mov files in directory
```
```bash
autocut subtitle ./render.mov # Generates an .srt file in the same directory as the file.
```

---

GUI version coming soon! If exams don't get in the way...