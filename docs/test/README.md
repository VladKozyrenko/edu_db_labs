🧪 Тестування системи
Загальна інформація
Цей розділ призначений для демонстрації та перевірки працездатності розробленої системи, реалізованої в рамках лабораторних робіт 1–6. Під час тестування перевірялась взаємодія між Java-додатком і базою даних MySQL.

✅ Тестові дії
1. Компіляція проєкту:
bash
Copy
Edit
javac -cp "lib/*" -d . Main.java dao/*.java model/*.java utils/*.java
2. Запуск:
bash
Copy
Edit
java -cp ".;lib/*" Main
3. Очікуваний результат:
makefile
Copy
Edit
Users:
1: Anna Kovalenko
2: Ivan Petrenko

Products:
1: Test Product 1 - 99.99
2: Test Product 2 - 49.5
🔎 Покриття тестами
Отримання всіх користувачів (UserDAO.getAllUsers())

Отримання всіх товарів (ProductDAO.getAllProducts())

Встановлення з’єднання з MySQL (DBConnection.getConnection())

⚠️ Вимоги до середовища
JDK 17+

MySQL 8.x

Драйвер mysql-connector-j-9.3.0.jar в папці lib/

Структура БД відповідно до schema.sql та seed.sql


