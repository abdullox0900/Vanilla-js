let elInput = document.querySelector(".input");
let elCopyBtn = document.querySelector(".span.far");
let elBtn = document.querySelector(".btn")
let randomNumber = "abdftkoyblmjnopeqywzABDFTKOUKMSCPLVTYIEXNSWZ123456789!@#%^&*-=+";

elBtn.onclick = () => {
    let i;
    randomPassword = "";
    for (i = 0; i < 16; i++) {
        randomPassword = randomPassword + randomNumber.charAt(
            Math.floor(Math.random() * randomNumber.length)
        );
    }
    elInput.value = randomPassword;
}

function copy() {
    elInput.select();
    document.execCommand("copy");
}