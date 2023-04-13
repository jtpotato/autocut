import gradient = require("gradient-string")

export const title = (text: string) => {
    return gradient("#f7cfb4", "#e26fb6")(text)
}

export const emphasis = (text: string) => {
    return gradient("#3077D9", "#0BBAD5")(text)
}

export const error = (text: string) => {
    return gradient("#ff0000", "#ff0090")(text)
}

export const debug = (text: any) => {
    if (process.env.DEV) {
        console.log(gradient("#573500", "#4a4a4a")(JSON.stringify(text)))
    }
}