
let profileView = JSON.parse(sessionStorage.getItem("Person"));
console.log(profileView)


document.getElementById("name").innerText = profileView.fullname;
document.getElementById("email").innerText = profileView.email;
document.getElementById("number").innerText = profileView.phone;
document.getElementById("gender").innerText = profileView.gender;
document.getElementById("dob").innerText = profileView.birthdate;