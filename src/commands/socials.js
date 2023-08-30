import React from "react"
import { CommandLine } from "./command"

const SocialLine = (props) => {
    const social = props.social
    const link = props.link

    return (
        <tr>
            <td style={{width: 150}}>
               {social} 
            </td>
            <span>-&nbsp;&nbsp;</span>
            <td>
                {link}
            </td>
        </tr>
    )
}

export const Socials = (props) => {
    const command = props.command

    return (
        <div style={{paddingBottom: 10}}>
            <CommandLine command={command}></CommandLine>
            <table>
                <SocialLine social={"1. LinkedIn"}  link={"https://www.linkedin.com/in/jo-shshen/"}></SocialLine>
                <SocialLine social={"2. GitHub"}    link={"https://github.com/josh-shen"}></SocialLine>
            </table>
        </div>
    )
}