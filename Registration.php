<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="./css/registration.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>

<body>
    <div class="container">
        <div class="title">Registration</div>
        <br />
        <form id="login_form" method="" action="#" name="regi_form">
            <div class="user-details">

                <div class="input-box">
                    <span class="details">Name</span>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter Name">
                </div>

                <div class="input-box">
                    <span class="details">Email</span>
                    <input type="text" id="email" name="email" placeholder="Enter Email">
                </div>

                <div class="input-box">
                    <span class="details">Password</span>
                    <input type="password" id= "pwd" name="pwd" placeholder="Enter password">
                </div>

                <div class="input-box">
                    <span class="details">Mobile Number</span>
                    <input type="tel" id = "phone" name="phone" placeholder="Enter Mobile Number">
                </div>

                <div class="input-box">
                    <span class="details">Date of Birth</span>
                    <input type="date" id="birthdate" name="dob" placeholder="Enter Date of Birth">
                </div>

                <div class="gender">
                    <span class="details">Gender</span> <br>
                    <div class="input-box-1">
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male">
                      
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female">
                    </div>
                         
                </div>

            </div>


            <div class="button">
                <input type="submit" value="Register" class="btn" onclick="saveData()">
            </div>

        </form>
        <p> Already have an account <a href="./index.php"> Login </a></p>
       
    </div>
    <script src = "./js/registration.js"></script>
    
</body>

</html>