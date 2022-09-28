<!DOCTYPE html>
<html lang="en">

<head>
    <title>Profile View</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./css/ProfileView.css" rel="stylesheet">
</head>

<body>
    <h2> Employee Details</h2>
    <div class="container-box">

    <table aria-describedby="table details" class="table" cellspacing="15" cellpadding="15">
 
      <tr>
        <td>Name</td>
        <td id="name"></td>
      </tr>

      <tr>
        <td>Email</td>
        <td id="email"></td>
      </tr>

      <tr>
        <td>Mobile Number</td>
        <td id="number"></td>
      </tr>

      <tr>
        <td>Gender</td>
        <td id="gender"></td>
      </tr>

      <tr>
        <td>Date of Birth</td>
        <td id="dob"></td>
      </tr>

    </table> 

    <div class="button">
      <a href="./Edit.php"> Edit Profile</a>
    </div>
    </div>

    <script src="./ProfileView.js"></script>
</body>

</html>