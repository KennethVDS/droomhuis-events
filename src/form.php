<?php
class form {
    function contactform() {
        if (isset($_POST[submit])) {
            $name = $_POST['fullname'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $company = $_POST['company'];
            $interest = $_POST['interest'];
            $message = $_POST['message'];
            $formcontent="From: $name \n Message: $message";
            $subject = "Contact Form";
            $mailheader = "From: $email \r\n";
            $droomhuis = "kennethvderstrieckt@gmail.com";
            try {
                if (mail($droomhuis, $subject, $formcontent, $mailheader)) {
                    header('Location:../../index.html');
                };
            } catch (Exception $e) {
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }
        }
    }
}