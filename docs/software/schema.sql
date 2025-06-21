-- Створення бази даних
DROP DATABASE IF EXISTS DataManagementSystem;
CREATE DATABASE DataManagementSystem;
USE DataManagementSystem;

-- Таблиця ObjectControl
CREATE TABLE IF NOT EXISTS ObjectControl (
    objectControlId INT NOT NULL AUTO_INCREMENT,
    objectType VARCHAR(45) NULL,
    PRIMARY KEY (objectControlId),
    UNIQUE INDEX objectControlId_UNIQUE (objectControlId ASC)
) ENGINE = InnoDB;

-- Таблиця Metadata
CREATE TABLE IF NOT EXISTS Metadata (
    metadataId INT NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(45) NULL,
    `value` VARCHAR(45) NULL,
    objectControlId INT NOT NULL,
    PRIMARY KEY (metadataId, objectControlId),
    INDEX fk_Metadata_ObjectControl_idx (objectControlId ASC),
    UNIQUE INDEX metadataId_UNIQUE (metadataId ASC),
    CONSTRAINT fk_Metadata_ObjectControl
        FOREIGN KEY (objectControlId)
        REFERENCES ObjectControl (objectControlId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Таблиця DataPoints (виправлена)
CREATE TABLE IF NOT EXISTS DataPoints (
    tableName VARCHAR(45) NOT NULL,
    dataPointsId INT NOT NULL,
    objectControlId INT NOT NULL,
    PRIMARY KEY (dataPointsId),
    UNIQUE INDEX dataPointsId_UNIQUE (dataPointsId ASC),
    UNIQUE INDEX tableName_UNIQUE (tableName ASC),
    CONSTRAINT fk_DataPoints_ObjectControl
        FOREIGN KEY (objectControlId)
        REFERENCES ObjectControl (objectControlId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Таблиця Concept
CREATE TABLE IF NOT EXISTS Concept (
    conceptId INT NOT NULL,
    conceptName VARCHAR(45) NULL,
    type VARCHAR(45) NULL,
    validator VARCHAR(45) NULL,
    tableName VARCHAR(45) NULL,
    `filter` VARCHAR(45) NULL,
    conceptParentId INT NULL,
    objectControlId INT NOT NULL,
    PRIMARY KEY (conceptId),
    INDEX fk_Concept_Concept1_idx (conceptParentId ASC),
    UNIQUE INDEX conceptId_UNIQUE (conceptId ASC),
    UNIQUE INDEX conceptName_UNIQUE (conceptName ASC),
    CONSTRAINT fk_Concept_Concept1
        FOREIGN KEY (conceptParentId)
        REFERENCES Concept (conceptId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT fk_Concept_ObjectControl
        FOREIGN KEY (objectControlId)
        REFERENCES ObjectControl (objectControlId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Таблиця Role
CREATE TABLE IF NOT EXISTS Role (
    roleId INT NOT NULL,
    roleType VARCHAR(45) NULL,
    PRIMARY KEY (roleId),
    UNIQUE INDEX roleId_UNIQUE (roleId ASC)
) ENGINE = InnoDB;

-- Таблиця Association
CREATE TABLE IF NOT EXISTS Association (
    `index` INT NOT NULL,
    dataPointsId INT NOT NULL,
    conceptId INT NOT NULL,
    roleId INT NOT NULL,
    PRIMARY KEY (dataPointsId, conceptId, roleId),
    CONSTRAINT fk_Association_DataPoints
        FOREIGN KEY (dataPointsId)
        REFERENCES DataPoints (dataPointsId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT fk_Association_Concept
        FOREIGN KEY (conceptId)
        REFERENCES Concept (conceptId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT fk_Association_Role
        FOREIGN KEY (roleId)
        REFERENCES Role (roleId)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) ENGINE = InnoDB;
