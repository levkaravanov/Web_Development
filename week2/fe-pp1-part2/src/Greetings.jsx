import React from "react";

const Greetings = (props) => {
    const { lang, children } = props;
    switch (lang) {
        case "fi":
            return <div className="greetings">Moikka {children}</div>
        case "de":
            return <div className="greetings">Hallo {children}</div>
        case "en":
            return <div className="greetings">Hello {children}</div>
        case "es":
            return <div className="greetings">Hola {children}</div>
        case "fr":
            return <div className="greetings">Bonjour {children}</div>
        default:
            return <div className="greetings">Hello {children}</div>
    }
};

export default Greetings;