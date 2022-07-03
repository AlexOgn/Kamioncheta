function Kamionchify(){
    let base = `──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█BEEP BEEP
▄▄▄▌█ █ █ █`
    let end = `
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀(@)▀`
    let dumi = document.getElementById("goshko").value.toUpperCase();
    console.log("asdf");
    base += dumi;
    base += end;

    let textarea = document.getElementById("Output");
    textarea.innerHTML = base;
}
