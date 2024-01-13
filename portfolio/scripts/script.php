<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "mrbrianlimo@gmail.com";
    $subject = "New Form Submission";
    $headers = "From: $email";

    // Compose the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $body, $headers);
}
?>
