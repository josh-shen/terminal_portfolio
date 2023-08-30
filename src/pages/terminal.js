import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { About } from "../commands/about.js";
import { Echo } from "../commands/echo.js";
import { Education } from "../commands/education.js";
import { Email } from "../commands/email.js";
import { Help } from "../commands/help.js"
import { History } from "../commands/history.js";
import { Socials } from "../commands/socials.js";
import { Welcome } from "../commands/welcome.js";

const history = []

export default function Terminal() {
    const commandRef = useRef(null);
    const scrollRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [appendedElements, setAppendedElements] = useState([])

    const handleSubmit = () => {
        history.push(inputValue)
        setInputValue("");

        let newElement;

        const args = inputValue.trim().split(" ");
        const command = args.shift().toLowerCase();

        switch(command){
            case "about":
                newElement = <About command={inputValue}></About>
                break
            case "clear":
                setAppendedElements([])
                history.length = 0
                break; 
            case "echo":
                newElement = <Echo command={inputValue} string={args.join(" ")}></Echo>
                break
            case "education":
                newElement = <Education command={inputValue}></Education>
                break
            case "email":
                newElement = <Email command={inputValue}></Email>
                break
            case "help":
                newElement = <Help command={inputValue}></Help>
                break
            case "history":
                newElement = <History command={inputValue} history={history}></History>
                break
            case "socials":
                newElement = <Socials command={inputValue}></Socials>
                break
            case "welcome":
                newElement = <Welcome command={inputValue}></Welcome>
                break
            default:
                break
        }
        setAppendedElements(prevElements => [...prevElements, newElement]);
    };

    //command input handlers
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
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