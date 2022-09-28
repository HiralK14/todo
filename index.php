<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="./css/login.css">
</head>


<body>
    <div class="container">
        <div class="title">Login</div>
        <br />
        <form method="" action="#" name="loginform">
            <div class="user-details">

                <div class="input-box">
                    <span class="details">Enter Email / Mobile</span>
                    <input type="text" id="email" name="user_name" placeholder="Enter Email or mobile">
                </div>

                <div class="input-box">
                    <span class="details">password</span>
                    <input type="password" id="pwd" placeholder="Enter your password">
                </div>


                <div class="button">
                    <input type="submit" value="Login" onclick="checkValidation()">
                </div>

            </div>
        </form>
        <p> Not got an account? <a href="./Registration.php"> Sign Up</a></p>
    </div>

    <script src="login.js"></script>

</body>

</html>