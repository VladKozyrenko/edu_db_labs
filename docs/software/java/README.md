## ⚙️ Використані технології:
- Java 17
- MySQL 8
- JDBC (mysql-connector-java)
- VS Code

---

## 🛠️ Структура проєкту:

```
software/
├── dao/
│   ├── ProductDAO.java
│   └── UserDAO.java
├── model/
│   ├── Product.java
│   └── User.java
├── utils/
│   └── DBConnection.java
├── Main.java
├── lib/
│   └── mysql-connector-j-9.3.0.jar
```

---

## 📂 Опис файлів:

- **model/** — класи-сутності, які відповідають таблицям БД (`Product`, `User`)
- **dao/** — DAO класи для доступу до таблиць (`ProductDAO`, `UserDAO`)
- **utils/DBConnection.java** — окремий клас для підключення до БД
- **Main.java** — головний клас з логікою запуску
- **lib/** — містить драйвер `mysql-connector-java`

---

## 🧱 Створена база даних:

### Схема: `datamanagementsystem`

#### Таблиці:
- `products(id, name, price)`
- `users(id, name)`

SQL-приклад створення:
```sql
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  price DOUBLE
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);
```

---

## 📌 Основний код:

### `DBConnection.java`
```java
public class DBConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/datamanagementsystem";
    private static final String USER = "root";
    private static final String PASSWORD = "your_password";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
```

---

## ▶️ Запуск

### Компіляція:
```bash
javac -cp "lib/*" -d . Main.java dao/*.java model/*.java utils/*.java
```

### Запуск:
```bash
java -cp ".;lib/*" Main
```

---

## ✅ Результат:
> Виведення всіх користувачів і продуктів із бази даних у консоль:
```
Users:
1: Anna Kovalenko
2: Ivan Petrenko

Products:
1: Test Product 1 - 99.99
2: Test Product 2 - 49.5
```

---

## 📷 Скріншоти:

- 📌 Структура проєкту в VS Code
- ![image](https://github.com/user-attachments/assets/621575cd-031e-4d96-bf43-53bb3b1640a9)

- 📌 Таблиці у MySQL Workbench
- ![image](https://github.com/user-attachments/assets/e42c88cd-32b4-47bb-85fb-823bd3a77362)
- ![image](https://github.com/user-attachments/assets/fb396877-d50d-4f83-860c-6bd9fd209367)


- 📌 Консольний вивід
- ![image](https://github.com/user-attachments/assets/5df2d48a-785c-4b45-95a9-89cc4a93cb5a)


---

## 🧠 Висновок:
У процесі виконання лабораторної роботи було засвоєно:
- Як встановлювати з'єднання Java ↔ MySQL через JDBC.
- Як реалізувати шаблон DAO для роботи з таблицями.
- Як структурувати Java-проєкт для роботи з базами даних.
