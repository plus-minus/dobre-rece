export default {
    name: {
        test: name => typeof name === "string" && name.length > 0 && !name.includes(" "),
        errorMsg: "Podane imię jest nieprawidłowe!"
    },
    email: {
        test: email => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        errorMsg: "Podany email jest nieprawidłowy!"
    },
    msg: {
        test: msg => typeof msg === "string" && msg.length > 120,
        errorMsg: "Wiadomość musi mieć conajmniej 120 znaków!"
    },
    pswd: {
        test: pass => typeof pass === "string" && pass.length >= 6,
        errorMsg: "Podane hasło jest za krótkie!"
    },
    pswd2 : {
        test: (pswd2, pswd) => typeof pswd2 === "string" && pswd2.length >= 6 && pswd === pswd2,
        errorMsg: "Podane hasło jest nieprawidłowe!"
    }
}