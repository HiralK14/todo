function checkValidation() { 

    var a = false;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;

    var person = JSON.parse(localStorage.getItem('person'));

    for (var i = 0; i < person.length; i++) {

        if (email === person[i].email && pwd === person[i].pwd) {
            alert('You are loged in.')
          
            sessionStorage.setItem("Person",JSON.stringify(person[i]));
            window.location.replace('./Dashboard.php')
            // window.location.href = './Dashboard.php'
            //    a = true;
            break;
        }
    }
    if (a == false) {
        alert("plese enter valid email and password")
    }
}




// function checkValidation() {
// 	const employee = JSON.parse(localStorage.getItem("person"));
// 	const userCreds = document.getElementsByTagName("input");
// 	const userId = userCreds[0].value;
// 	const password = userCreds[1].value;
// 	// let msg = [];
// 	employee.map((value) => {
// 		// console.log("N");
// 	//   if (value.email === userId && value.pwd === password) {
// 		if (value.email === userId) {
// 			if(value.pwd === password){
// 				alert("logged in");
//                 sessionStorage.setItem("Person",JSON.stringify(person[i]));
// 				window.location.replace('./Dashboard.html')
// 			}
// 			else {
// 				alert("incorrect username and password");
// 			}
			
// 		return true;
// 	  } else {
// 		alert("user not found");
// 	  }
// 	});
//   }








  
//   // edit logic
//   function editValues() {
// 	const employee = JSON.parse(localStorage.getItem("person"));
// 	const userUniqueID = JSON.parse(localStorage.getItem("uniqueId"));
// 	const userCreds = document.getElementsByTagName("input");
// 	const name = userCreds[0].value;
// 	const email = userCreds[1].value;
// 	const mobile = userCreds[1].value;
// 	employee.map((value) => {
// 	  if (userUniqueID === value.uniqueId) {
// 		value.name = name;
// 		value.email = email;
// 		value.mobile = mobile;
  
// 		return true;
// 	  } else {
// 		console.log("user not found");
// 	  }
// 	});
// 	localStorage.setItem("person", employee);
//   }
  