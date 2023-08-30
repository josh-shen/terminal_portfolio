import React from "react";

export const CommandLine = (props) => {
    const command = props.command;

    return (
        <div>
            <span class="prefix">guest</span>@<span class="secondary">term.js</span>:~$ {command}
        </div>
    );
};