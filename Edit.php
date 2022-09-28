<!DOCTYPE html>
<html lang="en">

<head>
    <title>Profile View</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./css/edit.css" rel="stylesheet">
</head>

<body>
    <h2> Edit Profile</h2>
    <div class="container-box">

    <table aria-describedby="table details" class="table" cellspacing="15" cellpadding="15">

      <tr>
        <td>Name</td>
        <td id="name"> <input id="fullname" type="text" value=""></td>
      </tr>

      <tr>
        <td>Email</td>
        <td id="email1"> <input id="email" type="text" value=""></td>
      </tr>

      <tr>
        <td>Mobile Number</td>
        <td id="number">  <input id="phone" type="text" value=""></td>
      </tr>

       <tr>
        <td>Gender</td>
        <td id="gender1"> <input id="gender" type="text" value=""></td>
      </tr>

    </table> 

    <div class="button">
      <input type="submit" value="Edit Profile" onclick="editProfile()">
    </div>
    </div>

    <script src="./js/edit.js"></script>
</body>

</html>