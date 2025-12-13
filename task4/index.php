<?php
$users = [
    ["name" => "Иван", "age" => 25, "city" => "Москва"],
    ["name" => "Мария", "age" => 30, "city" => "Санкт-Петербург"],
    ["name" => "Петр", "age" => 22, "city" => "Казань"],
    ["name" => "Анна", "age" => 28, "city" => "Новосибирск"]
];

echo "<h3>Информация о пользователях:</h3>";
echo "<ul>";

foreach ($users as $user) {
    echo "<li>";
    echo "Имя: " . $user["name"] . ", ";
    echo "Возраст: " . $user["age"] . ", ";
    echo "Город: " . $user["city"];
    echo "</li>";
}

echo "</ul>";
?>
