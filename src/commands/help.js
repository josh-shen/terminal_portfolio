import React from "react"
import { CommandLine } from "./command"

const HelpLine = (props) => {
    const command = props.command
    const description = props.description

    return (
        <tr>
            <td style={{width: 150}}>
               {command} 
            </td>
            <span>-&nbsp;&nbsp;</span>
            <td>
                {description}
            </td>
        </tr>
    )
}

export const Help = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 15}}>
            <CommandLine command={command}></CommandLine>
            <br></br>
            <table>
                <HelpLine command={"about"}             description={"about Josh Shen"}></HelpLine>
                <HelpLine command={"clear"}             description={"clears the terminal"}></HelpLine>
                <HelpLine command={"echo [string]"}     description={"display value of input string"}></HelpLine>
                <HelpLine command={"education"}         description={"show education background"}></HelpLine>
                <HelpLine command={"email"}             description={"show email for contact"}></HelpLine>
                <HelpLine command={"help"}              description={"list all available commands"}></HelpLine>
                <HelpLine command={"history"}           description={"list all past commands from current session"}></HelpLine>
                <HelpLine command={"socials"}           description={"show socials"}></HelpLine>
                <HelpLine command={"welcome"}           description={"show welcome line"}></HelpLine>
            </table>
        </div>
    )
}