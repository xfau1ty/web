<?php
function generatePassword($length) {
    $lowercase = implode('', range('a', 'z'));
    $uppercase = implode('', range('A', 'Z'));
    $numbers = implode('', range('0', '9'));
    
    $allChars = $lowercase . $uppercase . $numbers;
    $shuffled = str_shuffle($allChars);
    
    $password = '';
    for ($i = 0; $i < $length; $i++) {
        $password .= $shuffled[random_int(0, strlen($shuffled) - 1)];
    }
    
    return $password;
}

echo "<h3>Генератор паролей</h3>";
echo "<p>Пароль длиной 8 символов: " . generatePassword(8) . "</p>";
echo "<p>Пароль длиной 10 символов: " . generatePassword(10) . "</p>";
echo "<p>Пароль длиной 12 символов: " . generatePassword(12) . "</p>";
echo "<p>Пароль длиной 16 символов: " . generatePassword(16) . "</p>";
?>
