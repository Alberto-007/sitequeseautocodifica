const style = `
/*
Olá!
Relaxe enquanto você assiste eu mesmo me codificar.
*/

/*
Em primeiro lugar, precisamos adicionar algumas cores ao texto e ao plano de fundo.
Com um pouco de animações css.
*/

body {
    background: #222;
    color: #fff;
    transition: padding 0.5s ease-in-out;
    margin: 0px;
}

/*
Enquanto você me vê falando com você, meu estilo também está mudando.
Agora vamos me estilizar um pouco mais
*/

body {
    padding: 10%;
}

/*
Um pouco mais cores
*/

pre {
    background: #333;
    color: #fff;
    padding: 10px;
    word-wrap: break-word;
    pre-wrap: break-word
}

/*
Fork este repl para ter mais diversao e criar o seu proprio!
*/
`

window.onload = () => {
    var char = 0
    setInterval(() => {
        if (char < style.length) {
            elementFromId("style").innerHTML += style.charAt(char)
            elementFromId("show").innerHTML += style.charAt(char)
            window.scrollTo(0, document.body.scrollHeight)
            char++
        }
    }, 30)
}
