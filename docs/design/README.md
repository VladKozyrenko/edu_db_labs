# ER-модель системи опитування

У цьому документі представлена ER-модель інформаційної системи, яка включає сутності, зв’язки між ними та відповідну SQL-структуру таблиць.

---

## 📊 ER-діаграма

> Діаграма побудована на основі бізнес-об'єктів, виділених у попередніх лабораторних роботах.

@startuml
hide circle
skinparam linetype ortho
skinparam entity {
  BackgroundColor #eef
  BorderColor Black
}

entity "Користувачі" as Users {
  *user_id : INT
  --
  name : VARCHAR(100)
  email : VARCHAR(100)
  role : ENUM
}

entity "Опитування" as Surveys {
  *survey_id : INT
  --
  title : VARCHAR(200)
  created_by : INT
  created_at : DATE
}

entity "Питання" as Questions {
  *question_id : INT
  --
  survey_id : INT
  text : TEXT
}

entity "Відповіді" as Answers {
  *answer_id : INT
  --
  question_id : INT
  text : TEXT
}

entity "Результати" as Results {
  *result_id : INT
  --
  user_id : INT
  answer_id : INT
  submitted_at : TIMESTAMP
}

Users ||--o{ Surveys : створює
Surveys ||--o{ Questions : містить
Questions ||--o{ Answers : має
Users ||--o{ Results : проходить
Answers ||--o{ Results : обрано
@enduml

---

## 🛠 SQL-структура таблиць

```sql
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('експерт', 'адміністратор') NOT NULL
);

CREATE TABLE Surveys (
    survey_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    created_by INT NOT NULL,
    created_at DATE NOT NULL,
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

CREATE TABLE Questions (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    survey_id INT NOT NULL,
    text TEXT NOT NULL,
    FOREIGN KEY (survey_id) REFERENCES Surveys(survey_id)
);

CREATE TABLE Answers (
    answer_id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT NOT NULL,
    text TEXT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);

CREATE TABLE Results (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    answer_id INT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (answer_id) REFERENCES Answers(answer_id)
);
