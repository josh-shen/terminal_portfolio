import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { About } from "../commands/about.js";
import { CommandLine } from "../commands/command.js";
import { CurrDate } from "../commands/date.js";
import { Echo } from "../commands/echo.js";
import { Education } from "../commands/education.js";
import { Email } from "../commands/email.js";
import { Github } from "../commands/github.js";
import { Help } from "../commands/help.js"
import { HelpCommand } from "../commands/helpCommand.js";
import { History } from "../commands/history.js";
import { Invalid } from "../commands/invalid.js";
import { IPconfig } from "../commands/ipconfig.js";
import { LinkedIn } from "../commands/linkedin.js";
import { Ping } from "../commands/ping.js";
import { Welcome } from "../commands/welcome.js";

let history = ["welcome"]
let historyIndex = 0

export default function Terminal() {
    const commandRef = useRef(null);
    const scrollRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [appendedElements, setAppendedElements] = useState([<Welcome command={"welcome"}></Welcome>])

    const handleSubmit = () => {
        if (inputValue !== ""){
            history.push(inputValue)
        }

        let newElement;

        const args = inputValue.trim().split(" ");
        const command = args.shift().toLowerCase();

        switch(command){
            case "about":
                newElement = <About command={inputValue}></About>
                break
            case "clear":
                setAppendedElements([])
                break; 
            case "clhy":
                history = []
                newElement = <CommandLine command={inputValue}></CommandLine>
                break
            case "date":
                newElement = <CurrDate command={inputValue}></CurrDate>
                break
            case "echo":
                newElement = <Echo command={inputValue} string={args.join(" ")}></Echo>
                break
            case "education":
                newElement = <Education command={inputValue}></Education>
                break
            case "email":
                newElement = <Email command={inputValue}></Email>
                break
            case "github":
                newElement = <Github command={inputValue}></Github>
                break
            case "help":
                if (args.length > 0) {
                    newElement = <HelpCommand command={inputValue} string={args.join(" ")}></HelpCommand>
                    break
                }
                newElement = <Help command={inputValue}></Help>
                break
            case "history":
                newElement = <History command={inputValue} history={history}></History>
                break
            case "ipconfig":
                newElement = <IPconfig command={inputValue}></IPconfig>
                break
            case "linkedin":
                newElement = <LinkedIn command={inputValue}></LinkedIn>
                break
            case "ping":
                if (args.length === 2){
                    newElement = <Ping command={inputValue} target={args[0]} n={args[1]}></Ping>
                    break
                }
                newElement = <Ping command={inputValue} target={args.join(" ")} n={4}></Ping>
                break
            case "welcome":
                newElement = <Welcome command={inputValue}></Welcome>
                break
            case "":
                newElement = <CommandLine></CommandLine>
                break
            default:
                newElement = <Invalid command={inputValue}></Invalid>
                break
        }
        setAppendedElements(prevElements => [...prevElements, newElement]);
        setInputValue("");
    };

    //command input handlers
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
        if (event.key === "ArrowUp"){
            event.preventDefault()
            if (history.length > 0 && history.length > historyIndex){
                historyIndex++
                setInputValue(history[history.length - historyIndex])
            }
        }
        if (event.key === "ArrowDown"){
            if (history.length > 0 && historyIndex > 0){
                historyIndex--
                setInputValue(history[history.length - historyIndex])
            }
            if (historyIndex === 0){
                setInputValue("")
            }
        }
        if (event.ctrlKey && event.key === "l"){
            event.preventDefault()
            setAppendedElements([])
        }
        if (event.altKey && event.key === "F7"){
            history = []
        }
    };
    //qol - maintian focus on input, auto scroll down
    const regainFocus = event => {
        commandRef.current.focus();
    };
    useEffect(() => {
        if (commandRef.current) {
            commandRef.current.focus();
        }
    }, []);
    useLayoutEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "auto" });
    });

    return (
        <main>
            <div style={{paddingLeft: 15, paddingTop: 15}}>
                <div>
                    {appendedElements.map((element, index) => (
                        <React.Fragment key={index}>{element}</React.Fragment>
                    ))}     
                </div>
                <div ref={scrollRef}>
                    <span class="prefix">guest</span>@<span class="secondary">terminal.js</span>{":~$ "}
                    <input 
                        class="commandPrompt"
                        ref={commandRef} 
                        onBlur={regainFocus} 
                        type="text" 
                        value={inputValue} 
                        onChange={handleChange} 
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </div>
        </main >
    )
}