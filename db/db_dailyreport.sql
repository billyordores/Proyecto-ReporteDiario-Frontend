-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: db_dailyreport
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_aula_inventario`
--

DROP TABLE IF EXISTS `tb_aula_inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_aula_inventario` (
  `id_aula_inventario` int NOT NULL AUTO_INCREMENT,
  `id_aula` int NOT NULL,
  `id_objeto` int NOT NULL,
  PRIMARY KEY (`id_aula_inventario`),
  UNIQUE KEY `id_aulainventariol_UNIQUE` (`id_aula_inventario`),
  KEY `id_objetos_idx` (`id_objeto`),
  KEY `id_aulas_idx` (`id_aula`),
  CONSTRAINT `id_aulas` FOREIGN KEY (`id_aula`) REFERENCES `tb_aulas` (`id_aula`),
  CONSTRAINT `id_objeto` FOREIGN KEY (`id_objeto`) REFERENCES `tb_inventario` (`id_objeto`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_aula_inventario`
--

LOCK TABLES `tb_aula_inventario` WRITE;
/*!40000 ALTER TABLE `tb_aula_inventario` DISABLE KEYS */;
INSERT INTO `tb_aula_inventario` VALUES (1,1,1),(2,1,2),(4,2,1),(5,2,2),(6,40,1),(7,40,2),(8,40,3),(9,41,2),(10,41,1),(11,42,1),(12,42,3),(13,43,2),(14,43,4),(15,44,3),(16,44,4),(17,45,2),(18,45,1),(19,45,4),(20,46,2),(21,46,1),(22,46,3),(23,47,3),(24,47,1),(25,47,4),(26,48,1),(27,48,2),(28,48,7);
/*!40000 ALTER TABLE `tb_aula_inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_aulas`
--

DROP TABLE IF EXISTS `tb_aulas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_aulas` (
  `id_aula` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_aula`),
  UNIQUE KEY `idtb_aulas_UNIQUE` (`id_aula`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_aulas`
--

LOCK TABLES `tb_aulas` WRITE;
/*!40000 ALTER TABLE `tb_aulas` DISABLE KEYS */;
INSERT INTO `tb_aulas` VALUES (1,'1.2'),(2,'2.2'),(3,'-1.2'),(40,'1.1'),(41,'1.3'),(42,'1.4'),(43,'1.5'),(44,'1.6'),(45,'1.7'),(46,'1.8'),(47,'1.9'),(48,'1.10'),(67,'-2.2'),(68,'-2.4'),(69,'-2.6'),(70,'-2.1'),(71,'0.2'),(72,'-2.3'),(74,'0.4'),(75,'-2.3');
/*!40000 ALTER TABLE `tb_aulas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_comentario`
--

DROP TABLE IF EXISTS `tb_comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_comentario` (
  `id_comentario` int NOT NULL AUTO_INCREMENT,
  `id_aula_inventario` int NOT NULL,
  `fecha_creo` datetime NOT NULL,
  `comentario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_comentario`),
  UNIQUE KEY `idtb_comentario_UNIQUE` (`id_comentario`),
  KEY `fk_aula_inventario_idx` (`id_aula_inventario`),
  CONSTRAINT `fk_aula_inventario` FOREIGN KEY (`id_aula_inventario`) REFERENCES `tb_aula_inventario` (`id_aula_inventario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comentario`
--

LOCK TABLES `tb_comentario` WRITE;
/*!40000 ALTER TABLE `tb_comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_inventario`
--

DROP TABLE IF EXISTS `tb_inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_inventario` (
  `id_objeto` int NOT NULL AUTO_INCREMENT,
  `tipo_objeto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_objeto`),
  UNIQUE KEY `id_objeto_UNIQUE` (`id_objeto`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_inventario`
--

LOCK TABLES `tb_inventario` WRITE;
/*!40000 ALTER TABLE `tb_inventario` DISABLE KEYS */;
INSERT INTO `tb_inventario` VALUES (1,'Raton'),(2,'Teclado'),(3,'Bocina'),(4,'Regleta'),(7,'control'),(8,'HDMI');
/*!40000 ALTER TABLE `tb_inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_revision`
--

DROP TABLE IF EXISTS `tb_revision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_revision` (
  `id_revision` int NOT NULL AUTO_INCREMENT,
  `id_aula_inventario` int NOT NULL,
  `defectuoso` tinyint DEFAULT NULL,
  `faltante` tinyint DEFAULT NULL,
  `correcto` tinyint DEFAULT NULL,
  `fecha_creo` datetime NOT NULL,
  PRIMARY KEY (`id_revision`),
  UNIQUE KEY `id_revision_UNIQUE` (`id_revision`),
  KEY `fk_a_i_idx` (`id_aula_inventario`),
  CONSTRAINT `fk_a_i` FOREIGN KEY (`id_aula_inventario`) REFERENCES `tb_aula_inventario` (`id_aula_inventario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_revision`
--

LOCK TABLES `tb_revision` WRITE;
/*!40000 ALTER TABLE `tb_revision` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_revision` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-23 11:43:09
