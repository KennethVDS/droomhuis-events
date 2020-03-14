<?php
require_once '../../src/form.php';
?>
<html lang="en">
<head>
	<title>Droomhuis Contact</title>
	<meta charset="UTF-8">
	<meta name="viewport" type="text/html" content="width=device-width, initial-scale=1">

	<link rel="shortcut icon" type="image/png" href="../../assets/images/translogo.png"/>
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">

	<link rel="stylesheet" type="text/css" href="../../assets/css/utilcontact.css">
	<link rel="stylesheet" type="text/css" href="../../assets/css/maincontact.css">

</head>
<body>
	<div class="container-contact100">
		<iframe class="contact100-map" id="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4309.115407731797!2d4.0401790644803794!3d51.065782751622365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c39a7f65608757%3A0x18a979dbcfdb8fe3!2sVeldekensstraat%2083%2C%209240%20Zele!5e0!3m2!1sen!2sbe!4v1581082024559!5m2!1sen!2sbe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
		<div class="wrap-contact100">
			<div class="contact100-form-title" style="background-image: url(../../assets/images/crew.png);">
				<span class="contact100-form-title-1">
					Contact Us
				</span>
				<span class="contact100-form-info">
					<span class="fa fa-envelope"> info@droomhuisevents.be</span> <br>
					<span class ="fa fa-home"> Zele 9240 Belgium</span> <br>
					<span class ="fa fa-facebook" href="https://www.facebook.com/droomhuisevents/"> /droomhuisevents</span> <br>
					<span class ="fa fa-phone"> +32/44-556-677</span>
				</span>
				<span class="contact100-form-title-2">
					Droomhuis is an organisation with a never-ending passion for music, people, events. <br>
					We believe in the beauty and importance of connecting and entertaining people through music and events. <br>
				</span>
			</div>
			<form class="contact100-form validate-form" method="post" action="../../src/form.php">
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100">Full Name:</span>
					<input class="input100" type="text" name="name" placeholder="Please type your full name">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Company:</span>
					<input class="input100" type="text" name="company" placeholder="Type your your company *">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: name@host.net">
					<span class="label-input100">Email:</span>
					<input class="input100" type="text" name="email" placeholder="Please type your e-mail addess">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Phone:</span>
					<input class="input100" type="text" name="phone" placeholder="Type your phone number*">
					<span class="focus-input100"></span>
				</div>
				
				<div class="wrap-input100 validate-input">
					<span class="label-input100">Interest*:</span>
					<select class="input100" name="interest">
						<option value="lost & found">Lost & Found</option>
						<option value="collaboration">Collaboration</option>
						<option value="sponsoring">Sponsoring</option>
						<option value="other">Other</option>
					</select>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<span class="label-input100">Message:</span>
					<textarea class="input100" name="message" placeholder="Please type Your Message..."></textarea>
					<span class="focus-input100"></span>
				</div>

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn" type="submit" name="submit">
						<span>Submit<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i></span>
					</button>
					<button class="contact100-form-btn" name="home" onclick="window.location.href = '../../index.html';">
						<span>Return<i class="fa fa-home"></i></span>
					</button>
				</div>
			</form>
		</div>
	</div>
	<div id="dropDownSelect1"></div>

	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/animsition/js/animsition.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
	<script src="vendor/countdowntime/countdowntime.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes"></script>
	
	<script src="../../controller/map-contact.js"></script>
	<script src="../../controller/contact.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-23581568-13');
	</script>

</body>
</html>
