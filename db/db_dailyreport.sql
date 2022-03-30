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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_aula_inventario`
--

LOCK TABLES `tb_aula_inventario` WRITE;
/*!40000 ALTER TABLE `tb_aula_inventario` DISABLE KEYS */;
INSERT INTO `tb_aula_inventario` VALUES (1,1,2),(2,5,1),(3,8,3),(4,7,2);
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
  `nombre` varchar(255) NOT NULL,
  `planta` varchar(255) NOT NULL,
  PRIMARY KEY (`id_aula`),
  UNIQUE KEY `idtb_aulas_UNIQUE` (`id_aula`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_aulas`
--

LOCK TABLES `tb_aulas` WRITE;
/*!40000 ALTER TABLE `tb_aulas` DISABLE KEYS */;
INSERT INTO `tb_aulas` VALUES (1,'0.2','0'),(2,'0.4','0'),(3,'0.6','0'),(4,'0.10','0'),(5,'0.12','0'),(6,'1.1','1'),(7,'1.2','1'),(8,'1.3','1'),(9,'1.4','1'),(10,'1.5','1'),(11,'1.6','1'),(12,'1.7','1'),(13,'1.8','1'),(14,'1.9','1'),(15,'1.10','1'),(16,'-1.1','-1'),(17,'-1.2','-1'),(18,'-1.3','-1'),(19,'-1.4','-1'),(20,'-1.5','-1'),(21,'-1.6','-1'),(22,'-1.7','-1'),(23,'-1.8','-1'),(24,'-1.9','-1'),(25,'-1.10','-1'),(26,'-1.11','-1'),(27,'-1.12','-1'),(28,'-1.13','-1'),(29,'-1.14','-1'),(30,'-2.1','-2'),(31,'-2.2','-2'),(32,'-2.4','-2'),(33,'-2.6','-2'),(34,'-2.15','-2'),(35,'SA1','-2'),(36,'SA2','-2');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comentario`
--

LOCK TABLES `tb_comentario` WRITE;
/*!40000 ALTER TABLE `tb_comentario` DISABLE KEYS */;
INSERT INTO `tb_comentario` VALUES (1,1,'2022-03-29 15:18:01','1');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_inventario`
--

LOCK TABLES `tb_inventario` WRITE;
/*!40000 ALTER TABLE `tb_inventario` DISABLE KEYS */;
INSERT INTO `tb_inventario` VALUES (1,'Raton'),(2,'Teclado'),(3,'HDMI');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_revision`
--

LOCK TABLES `tb_revision` WRITE;
/*!40000 ALTER TABLE `tb_revision` DISABLE KEYS */;
INSERT INTO `tb_revision` VALUES (1,1,1,1,1,'2022-03-29 12:42:30'),(2,1,1,1,0,'2022-03-29 14:52:45'),(3,1,1,1,0,'2022-03-29 14:52:47'),(4,2,1,1,0,'2022-03-29 14:56:16'),(5,2,1,1,0,'2022-03-29 14:56:20'),(6,2,0,1,0,'2022-03-29 14:56:31'),(7,2,0,1,0,'2022-03-29 14:56:34');
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

-- Dump completed on 2022-03-30 11:31:28
