function displayResult(){
    let codeHTML = document.getElementById("html").value
    let codeCSS = document.getElementById("css").value
    let codeJS = document.getElementById("js").value
    let resultEl = document.getElementById("result")
    resultEl.contentDocument.body.innerHTML = `${codeHTML}<style>${codeCSS}</style>`
    resultEl.contentWindow.eval(codeJS)
}