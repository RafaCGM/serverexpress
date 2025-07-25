-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: arcondicionadodb
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `equipamento`
--

DROP TABLE IF EXISTS `equipamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipamento` (
  `id_equipamento` int unsigned NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `espaco_num_espaco` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id_equipamento`),
  KEY `equipamento_espaco_num_espaco_foreign` (`espaco_num_espaco`),
  CONSTRAINT `equipamento_espaco_num_espaco_foreign` FOREIGN KEY (`espaco_num_espaco`) REFERENCES `espaco` (`num_espaco`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipamento`
--

LOCK TABLES `equipamento` WRITE;
/*!40000 ALTER TABLE `equipamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `espaco`
--

DROP TABLE IF EXISTS `espaco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `espaco` (
  `id_espaco` int unsigned NOT NULL AUTO_INCREMENT,
  `num_espaco` int unsigned NOT NULL,
  `usuarios_idusuario` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id_espaco`),
  UNIQUE KEY `espaco_num_espaco_unique` (`num_espaco`),
  KEY `espaco_usuarios_idusuario_foreign` (`usuarios_idusuario`),
  CONSTRAINT `espaco_usuarios_idusuario_foreign` FOREIGN KEY (`usuarios_idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `espaco`
--

LOCK TABLES `espaco` WRITE;
/*!40000 ALTER TABLE `espaco` DISABLE KEYS */;
INSERT INTO `espaco` VALUES (5,84,1);
/*!40000 ALTER TABLE `espaco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (3,'20250723235404_create_usuarios.js',1,'2025-07-24 00:05:20'),(4,'20250724000017_create_espaco.js',1,'2025-07-24 00:05:20'),(6,'20250724001731_create_equipamento.js',2,'2025-07-24 00:28:15'),(7,'20250724003115_create_monitoramento.js',3,'2025-07-24 00:36:17'),(8,'20250725185148_alterar_chave_espaco.js',4,'2025-07-25 18:53:49'),(9,'20250725190211_alterar_chave_equipamento.js',5,'2025-07-25 19:20:27'),(10,'20250725192323_adicionar_unique_num_espaco.js',6,'2025-07-25 19:24:16'),(11,'20250725192515_remover_espaco_num_espaco_de_equipamento.js',7,'2025-07-25 19:28:47'),(12,'20250725193124_add_espaco_num_espaco_to_equipamento.js',8,'2025-07-25 19:38:27'),(13,'20250725194056_add_chaveespaco_equipamento.js',9,'2025-07-25 19:45:01'),(14,'20250725195056_remover_chave_equipamento.js',10,'2025-07-25 19:51:35'),(16,'20250725195301_add_espaco_num_espaco_to_equipamento.js',11,'2025-07-25 20:11:56');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monitoramento`
--

DROP TABLE IF EXISTS `monitoramento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monitoramento` (
  `id_monitoramento` int unsigned NOT NULL AUTO_INCREMENT,
  `equipamento_idequipamento` int unsigned DEFAULT NULL,
  `data_hora` datetime NOT NULL,
  `temperatura` int NOT NULL,
  `umidade` int NOT NULL,
  PRIMARY KEY (`id_monitoramento`),
  KEY `monitoramento_equipamento_idequipamento_foreign` (`equipamento_idequipamento`),
  CONSTRAINT `monitoramento_equipamento_idequipamento_foreign` FOREIGN KEY (`equipamento_idequipamento`) REFERENCES `equipamento` (`id_equipamento`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitoramento`
--

LOCK TABLES `monitoramento` WRITE;
/*!40000 ALTER TABLE `monitoramento` DISABLE KEYS */;
/*!40000 ALTER TABLE `monitoramento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int unsigned NOT NULL AUTO_INCREMENT,
  `matricula` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `usuarios_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'000000000','admin','admin@gmail.com','123456'),(2,'202311980600007','Rafael Gomes do Nascimento','rafa@gmail.com','123'),(3,'20231198060012','Euller Christopher Faustino','euller@gmail.com','123'),(4,'20231198060006','Pedro Henrique Souza Santos','prenho@gmail.com','123');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-25 17:34:34
