let edit = JSON.parse(sessionStorage.getItem("Person"));

document.getElementById("fullname").value = edit.fullname;
document.getElementById("email").value = edit.email;
document.getElementById("phone").value = edit.phone;
document.getElementById("gender").value = edit.gender;


function editProfile(){

        fullname = document.getElementById("fullname").value,
        email=  document.getElementById("email").value,
        phone = document.getElementById("phone").value,
        gender =  document.getElementById("gender").value       
    
    let getStoredData = JSON.parse(localStorage.getItem('person'));

    for (let i = 0; i < getStoredData.length; i++) {
        if (email === getStoredData[i].email) {
            console.log("Email Success");
            getStoredData[i].fullname = fullname;
            getStoredData[i].email = email;
            getStoredData[i].phone = phone;
            getStoredData[i].gender = gender;

            localStorage.setItem('person', JSON.stringify(getStoredData))
            sessionStorage.setItem("Person",JSON.stringify(getStoredData[i]));
            break;
        }
    }
    
}