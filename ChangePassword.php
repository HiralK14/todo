<!DOCTYPE html>
<html lang="en">

<head>
    <title>Change Password
    </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./css/changepwd.css" rel="stylesheet">
</head>

<body>
    <h2>Change Password</h2>
    <div class="container-box">

    <table aria-describedby="table details" class="table" cellspacing="15" cellpadding="15">

      <tr>
        <td>Current password</td>
        <td id="name"> <input id="pwd" type="password" value=""></td>
      </tr>

      <tr>
        <td>New Password</td>
        <td id="email"> <input id="npwd" type="password" value=""></td>
      </tr>

      <tr>
        <td>Confirm New Password</td>
        <td id="number">  <input id="cpwd" type="password" value=""></td>
      </tr>

    </table> 

    <div class="button">
      <input type="submit" value="Change Password" onclick="changePassword()">
    </div>
    </div>

    <script src="./js/chnagepassword.js"></script>
</body>

</html>