import React from "react"
import { CommandLine } from "./command"

export const HelpCommand = (props) => {
    const command = props.command
    const string = props.string

    let commandHelp

    console.log (string)
    switch (string){
        case "about":
            commandHelp = string +  " - about me, Josh Shen"
            break
        case "clear":
            commandHelp = string + " - clear terminal"
            break
        case "clhy":
            commandHelp = string + " - clear the current session command history"
            break
        case "date":
            commandHelp = string + " - display the current date and time"
            break
        case "echo":
            commandHelp = string + " [string] - display value of input string"
            break
        case "education":
            commandHelp = string + " - show my education"
            break
        case "email":
            commandHelp = string + " - show my email"
            break
        case "github":
            commandHelp = string + " - go to my Github page"
            break
        case "help":
            commandHelp = string + " - help!"
            break
        case "history":
            commandHelp = string + " - list all commands from current session"
            break
        case "linkedin":
            commandHelp = string + " - go to my LinkedIn profile"
            break
        case "welcome": 
            commandHelp = string + " - display the terminal welcome line"
            break
        default:
            commandHelp = <span class="error">{string} : this is not a recognized command</span>
            break
    }

    return (
        <div >
            <CommandLine command={command}></CommandLine>
            <br></br>
            <div>{commandHelp}</div>
            <br></br>
        </div>
    )
}