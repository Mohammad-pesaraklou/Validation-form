const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);


function signIn(event){
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    let passwordValue = passwordInput.value
    let userNameValue = usernameInput.value
    let sendData = true;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(regex.test(userNameValue) === false){
        usernameMsg.innerText = `PLEASE ENTER THE VALID EMAIL!!`
        sendData  = false;
    }
    
    if(passwordValue.length === 0){
        passwordMsg.innerText = `PLEASE ENTER THE PASSWORD`
        sendData = false;
    }
    if(passwordValue <= 4){
        passwordMsg.innerText = `YOUR PASSWORD ISS TOO SHORT`
        sendData = false;
    }

    if(sendData){
        let body = JSON.stringify({
            username : userNameValue,
            password : passwordValue
        })
        let headers = {
            "Content-Type": "Application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : "POST",
            body: body,
            headers: headers
        })
        .then(response => {
            console.log(response)
            if(response.ok){
                sigininMsg.innerText = `SUCCESSFULLY`
            }
        })
    }
}





























