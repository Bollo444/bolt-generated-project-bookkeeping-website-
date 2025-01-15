<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];

      // Here you would typically send an email or store the data
      // For this example, we'll just print the data
      echo "<h2>Thank you for your message!</h2>";
      echo "<p>Name: " . htmlspecialchars($name) . "</p>";
      echo "<p>Email: " . htmlspecialchars($email) . "</p>";
      echo "<p>Message: " . htmlspecialchars($message) . "</p>";
    } else {
      // If not a POST request, show the form
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Us</title>
    </head>
    <body>
      <h2>Contact Us</h2>
      <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input type="text" name="name" placeholder="Your Name" required><br>
        <input type="email" name="email" placeholder="Your Email" required><br>
        <textarea name="message" placeholder="Your Message" required></textarea><br>
        <button type="submit">Send Message</button>
      </form>
    </body>
    </html>
    <?php
    }
    ?>
