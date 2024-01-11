<!-- <?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

try {
    if(isset($_POST["submit"])) {
        // Створення об'єкта PHPMailer
        $mail = new PHPMailer(true);
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

        // Налаштування для використання SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'requestbudon@gmail.com';
        $mail->Password = 'kfiunvxpkrdpdoct';
        $mail->SMTPSecure = 'ssl'; // зміна типу з'єднання
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->SMTPOptions = array(
            'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            )
            );

        // Встановлення адреси відправника
        $mail->setFrom('requestbudon@gmail.com');

        // Встановлення адреси отримувача з форми
        $mail->addAddress('oscar.roodby@gmail.com');  // Замініть на свою поштову скриньку

        // Встановлення формату повідомлення (HTML)
        $mail->isHTML(true);

        // Встановлення теми та тіла повідомлення з форми
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: {$_POST['name']}<br>"
            ."Surname: {$_POST['surname']}<br>"
            ."Adress: {$_POST['adress']}<br>"
            ."Postcode: {$_POST['postcode']}<br>"
            ."Local Authority: {$_POST['commune']}<br>"
            ."Telephone: {$_POST['telephone']}<br>"
            ."Email: {$_POST['email']}<br>"
            ."Message: {$_POST['message']}";

        // Відправлення повідомлення
        if ($mail->send()) {
            echo "<script>alert('Your Message is sent!');</script>";
        } else {
            echo "<script>alert('Message could not be sent. Mailer Error: " . $mail->ErrorInfo . "');</script>";
        }

        // echo 'Mailer Error: ' . $mail->ErrorInfo;

        // Виведення повідомлення користувачу та перенаправлення на іншу сторінку
    }
} catch (Exception $e) {
    // Замініть цей рядок, якщо ви хочете вивести повідомлення про помилку
    // echo 'Помилка: ' . $e->getMessage();
}

?> -->
