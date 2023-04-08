let signIn_btn = document.querySelector("#signIn_btn");
let logIn = document.querySelector(".logIn");
let signIn = document.querySelector(".signIn");
signIn_btn.onclick = ()=>{
    signIn.classList.add("active");
    logIn.classList.add("inactive")
}
let signInBtn = document.querySelector(".signInbtn");
signInBtn.onclick = ()=>{
    logIn.classList.remove("inactive");
    signIn.classList.remove("active");
}