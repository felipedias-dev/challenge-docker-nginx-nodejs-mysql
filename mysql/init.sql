CREATE DATABASE IF NOT EXISTS `fullcycle`;
USE `fullcycle`;

CREATE TABLE IF NOT EXISTS `people` (
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8624 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `people` 
    (`name`)
VALUES
    ("Nome 0")