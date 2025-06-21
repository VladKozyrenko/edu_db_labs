USE DataManagementSystem;

-- 1. Вибірка всіх об'єктів управління
SELECT * FROM ObjectControl;

-- 2. Вибірка всіх метаданих для objectControlId = 1
SELECT * FROM Metadata WHERE objectControlId = 1;

-- 3. Вибірка всіх концептів типу 'entity'
SELECT * FROM Concept WHERE type = 'entity';

-- 4. JOIN: таблиці + концепти
SELECT dp.tableName, c.conceptName
FROM DataPoints dp
JOIN Concept c ON dp.tableName = c.tableName;

-- 5. Оновлення типу ролі
UPDATE Role
SET roleType = 'superadmin'
WHERE roleId = 1;

-- 6. Видалення ролі з roleId = 3
DELETE FROM Role
WHERE roleId = 3;
