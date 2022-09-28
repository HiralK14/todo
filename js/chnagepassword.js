
function changePassword() {

    pwd= document.getElementById("pwd").value,
    npwd = document.getElementById("npwd").value,
    cpwd = document.getElementById("cpwd").value



let getStoredData = JSON.parse(localStorage.getItem('person'));

for (let i = 0; i < getStoredData.length; i++) {
    if (pwd === getStoredData[i].pwd) {
        console.log("password Changes Successfully");
        if (npwd == cpwd) {
            getStoredData[i].pwd = cpwd;
            console.log(getStoredData[i].pwd)
        }

        localStorage.setItem('person', JSON.stringify(getStoredData))
        sessionStorage.setItem("Person", JSON.stringify(getStoredData[i]));
        break;
    }
}

}