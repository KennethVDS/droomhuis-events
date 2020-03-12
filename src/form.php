<?php
if(filter_has_var(INPUT_POST, 'submit')){
    // Get Form Data
    $name = htmlspecialchars($_POST['name']);
    $company = htmlspecialchars($_POST['company']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $interest = htmlspecialchars($_POST['interest']);
    $message = htmlspecialchars($_POST['message']);

    // Check Required Fields
    if(!empty($email) && !empty($name) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            print_r('Please use a valid email');
        } else {
            $toEmail = 'kennethvdstrieckt@hotmail.com';
            $subject = 'Contact Request From '.$name;
            $body = ' 
                <h2>Contact Request</h2>
                <h4>Name</h4><p>'.$name.'</p>
                <h4>Company</h4><p>'.$company.'</p>
                <h4>Email</h4><p>'.$email.'</p>
                <h4>Phone</h4><p>'.$phone.'</p>
                <h4>Interest</h4>'.$interest.'</p>
                <h4>Message</h4><p>'.$message.'</p>
                <button onclick="window.location.href = `../../index.html`;"><span>Return<i class="fa fa-home"></i></span></button>
            ';
            print_r($body);
            if(mail($toEmail, $subject, $body)){
                print_r('Your email has been sent');
                header('location: ../views/ContactForm/index.php');
            } else {
                print_r('Your email was not sent');
            }
        }
    } else {
        print_r('Please fill in all fields');
    }
}