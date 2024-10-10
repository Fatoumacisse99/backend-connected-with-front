-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: gestion_recette
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (4,'Cuisine am?ricaine'),(3,'Cuisine fran?aise'),(5,'Cuisine italienne'),(8,'Cuisine japonaise'),(7,'Cuisine marocaine'),(1,'Cuisine mauritanienne'),(6,'Cuisine mexicaine'),(2,'Cuisine s?n?galaise');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(50) NOT NULL,
  `ingredients` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `categorie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`),
  KEY `categorie_id` (`categorie_id`),
  CONSTRAINT `recipes_ibfk_1` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Mouclade','Moules, Cr?me, Vin blanc','Entree',1),(2,'Thi?boudi?ne','Riz, Poisson, L?gumes','Plat principal',1),(3,'Mont?caos','Farine, Sucre, Cannelle','Dessert',1),(4,'Jus de bissap','Hibiscus, Sucre, Eau','Boisson',1),(5,'Pastels','Farine, Poisson, Sauce tomate','Entree',2),(6,'Yassa Poulet','Poulet, Oignons, Riz','Plat principal',2),(7,'Beignets de banane','Banane, Sucre, Farine','Dessert',2),(8,'Bissap','Hibiscus, Eau, Sucre','Boisson',2),(9,'Quiche lorraine','Oeufs, Cr?me, Lardons','Entree',3),(10,'Boeuf bourguignon','Boeuf, Vin rouge, Champignons','Plat principal',3),(11,'Tarte Tatin','Pommes, Sucre, P?te','Dessert',3),(12,'Kir','Vin blanc, Cr?me de cassis','Boisson',3),(13,'Buffalo wings','Poulet, Sauce piquante','Entree',4),(14,'Cheeseburger','Boeuf, Fromage, Pain','Plat principal',4),(15,'Brownie','Chocolat, Sucre, Farine','Dessert',4),(16,'Milkshake','Lait, Glace, Sucre','Boisson',4),(17,'Caprese','Tomates, Mozzarella, Basilic','Entree',5),(18,'Spaghetti Carbonara','P?tes, Lardons, Oeufs','Plat principal',5),(19,'Tiramisu','Mascarpone, Caf?, Biscuits','Dessert',5),(20,'Espresso','Caf?','Boisson',5),(21,'Nachos','Tortilla, Fromage, Haricots','Entree',6),(22,'Fajitas','Tortilla, Poulet, Poivrons','Plat principal',6),(23,'Churros','Farine, Sucre, Cannelle','Dessert',6),(24,'Margarita','Tequila, Jus de citron, Sucre','Boisson',6),(25,'Briouates','Farce, Feuilles de brick, Amandes','Entree',7),(26,'Tajine','Agneau, L?gumes, ?pices','Plat principal',7),(27,'Baghrir','Farine, Semoule, Levure','Dessert',7),(28,'Th? ? la menthe','Th? vert, Menthe, Sucre','Boisson',7),(29,'Sushi','Riz, Poisson, Nori','Entree',8),(30,'Ramen','Nouilles, Bouillon, Viande','Plat principal',8),(31,'Mochi','Riz gluant, Sucre','Dessert',8),(32,'Sak?','Riz, Eau, Levure','Boisson',8);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-10 13:01:53
