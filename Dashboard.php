<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="./css/style.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
   <title>Dashboard</title>
</head>

<body>
   <nav class="navbar">
      <span class="navbar-toggle" id="js-navbar-toggle"><i class="fas fa-bars"></i></span>

      <a href="#" class="logo">Dashboard</a>

      <ul class="main-nav" id="js-menu">
         <li><a href="./Profile.php" class="nav-links"> Profile</a></li>
         <li><a href="./Logout.php" class="nav-links">Logout</a></li>
         <!-- <input type="button" value> -->
      </ul>

   </nav>

   <div id="list">
      <input type="text" id="taskinput">
      <input type="submit" value="submit" id="tasksubmit">
   </div>

   <div id="container">
      <div id="container1"></div>
      <div id="container2"></div>
      <div id="div1" class="container-box"></div>
      <div id="div2" class="container-box"></div>
      <div id="div3" class="container-box"></div>
   </div>

   




   <script>
      let mainNav = document.getElementById("js-menu");
      let navBarToggle = document.getElementById("js-navbar-toggle");

      navBarToggle.addEventListener("click", function () {
         mainNav.classList.toggle("active");
      });


// --------------------- Display Current Time 
function currentTime() {
    const timeDisplay = document.getElementById("div3");
    const timeString = new Date().toLocaleTimeString();
    timeDisplay.textContent = timeString;
}
setInterval(currentTime, 1000);

//     var date = new Date();
//     var current_time = date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
//     document.getElementById("div3").innerHTML = current_time;


   </script>
   <script src="./js/dashboard.js"></script>


</body>

</html>