var data=[];

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const phone = document.getElementById("phone");
const birthdate = document.getElementById("birthdate");
// const gender = document.getElementById("gender");
const genderf = document.getElementById("female");
const genderm = document.getElementById("male");
// console.log(genderf);
// console.log(genderm);

function validate() {
    if (fullname.value.length < 2 || fullname.value.length > 20) {
        alert("Invalid Name Name length should be more than 2 and less than 21");
        fullname.focus();
        return false;
    }

    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Invalid email, Please enter valid email");
        email.focus();
        return false;
    }

    if (!pwd.value.match(/^.{6,15}$/)) {
        alert("Password length should between 6 to 15");
        return false;
    }

    if (!phone.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number should be 10 character long");
        phone.focus();
        return false;
    }

    if (birthdate.value == "") {
        alert("Invalid date of birth");
        return false;
    }

    if (genderf.checked == false && genderm.checked == false) {
        alert("Please select your gender");
        return false;
    }
return true;
}

function saveData() {
    var isValidate = validate()
    if(isValidate){
    var getgender
    if (document.getElementById('male').checked) {
        getgender = document.getElementById('male').value;
    }
    if (document.getElementById('female').checked) {
        getgender = document.getElementById('female').value;
    }

    const employee = {
        'fullname': document.getElementById("fullname").value,
        'email': document.getElementById("email").value,
        'pwd': document.getElementById("pwd").value,
        'phone': document.getElementById("phone").value,
        'gender': getgender,
        'birthdate': document.getElementById("birthdate").value
    }
    // localStorage.setItem("employee", JSON.stringify(employee));
    
        let getStoredData = JSON.parse(localStorage.getItem('person'));
        if (getStoredData === null) {
            data.push(employee);
            localStorage.setItem("person", JSON.stringify(data));
        }
        else {
            // getStoredData.forEach(element => {
            //     data.push(element)
            // });
            getStoredData.push(employee)
            // data.push(person);
            localStorage.setItem("person", JSON.stringify(getStoredData));
        }
    }
    
}
    




