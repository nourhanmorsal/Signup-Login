var userName = document.getElementById("name");
var emailAddress = document.getElementById("email");
var password = document.getElementById("password");
var Text = document.getElementById("text");
var userData = [];


    if(localStorage.getItem("Users") !== null){
        userData = JSON.parse(localStorage.getItem("Users"));
    }

function isEmailExist(email) {
    return userData.some(users => users.Email === email);
}
function isValidLogin(email, pass) {
    return userData.some(user => user.Email === email && user.Password === pass);
}


function getData() {
    if (isEmailExist(emailAddress.value)) {
        
        Text.innerHTML = "Email already exists";
        Text.style.display = "block"
        Text.style.color = "red"
        
    }
    else if(!userName.value || !emailAddress.value || !password.value){
        Text.innerHTML = "All fields are required";
    Text.style.display = "block";
    Text.style.color = "red";
    }
    else {
        var Register = {
            Name: userName.value,
            Email: emailAddress.value,
            Password: password.value
        };
        userData.push(Register);
        window.location.href = "login.html"
    }
    saveData()
    deleteData()
    
}
function deleteData(){
    userName.value = "";
    emailAddress.value = "";
    password.value = "";
}
function saveData(){
    localStorage.setItem("Users" , JSON.stringify(userData))
}

function loginData(){
    if(isValidLogin(emailAddress.value , password.value)){
        var loginUserName = userData.find(users => users.Email === emailAddress.value).Name
        localStorage.setItem("loginUserName", loginUserName)
        window.location.href = "Welcome.html"
    }
    else if(!emailAddress.value || !password.value){
        Text.innerHTML = "All inputs is required";
        Text.style.display = "block";
        Text.style.color = "red";
    }
    else{
        Text.innerHTML = "incorrect email or password";
        Text.style.display = "block";
        Text.style.color = "red";
    }
}
function displayUserName(){
    var loginUser = localStorage.getItem("LoggedInUser")
    if(loginUser){
document.getElementById("username").textContent = loginUser.split(" ")[0]
    }
}


