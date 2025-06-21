USE DataManagementSystem;

-- ObjectControl
INSERT INTO ObjectControl (objectType) VALUES
('Таблиця'),
('Колонка'),
('Сутність');

-- Metadata
INSERT INTO Metadata (`key`, `value`, objectControlId) VALUES
('source', 'API', 1),
('createdBy', 'admin', 2);

-- DataPoints
INSERT INTO DataPoints (tableName, dataPointsId, objectControlId) VALUES
('users', 1, 1),
('products', 2, 1);

-- Concept
INSERT INTO Concept (conceptId, conceptName, type, validator, tableName, `filter`, conceptParentId, objectControlId) VALUES
(1, 'Користувач', 'entity', NULL, 'users', NULL, NULL, 1),
(2, 'Продукт', 'entity', NULL, 'products', NULL, NULL, 1),
(3, 'Імʼя користувача', 'attribute', 'string', 'users', NULL, 1, 2);

-- Role
INSERT INTO Role (roleId, roleType) VALUES
(1, 'owner'),
(2, 'editor'),
(3, 'viewer');

-- Association
INSERT INTO Association (`index`, dataPointsId, conceptId, roleId) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 1, 3, 3);
