-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 28, 2016 at 02:50 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `graphKalinin1`
--

-- --------------------------------------------------------

--
-- Table structure for table `dots`
--

CREATE TABLE IF NOT EXISTS `dots` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `x_coord` int(10) NOT NULL,
  `y_coord` int(10) NOT NULL,
  `description` text NOT NULL,
  `graphs_id` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `dots`
--

INSERT INTO `dots` (`id`, `x_coord`, `y_coord`, `description`, `graphs_id`) VALUES
(2, 10, 10, '', 48),
(3, 30, 20, '', 48),
(4, 40, 50, '', 49),
(5, 70, 70, '', 48);

-- --------------------------------------------------------

--
-- Table structure for table `graphs`
--

CREATE TABLE IF NOT EXISTS `graphs` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `title` varchar(256) NOT NULL,
  `y_max` int(5) NOT NULL,
  `y_min` int(5) NOT NULL,
  `y_period` int(5) NOT NULL,
  `x_max` int(5) NOT NULL,
  `x_min` int(5) NOT NULL,
  `x_period` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `graphs`
--

INSERT INTO `graphs` (`id`, `title`, `y_max`, `y_min`, `y_period`, `x_max`, `x_min`, `x_period`) VALUES
(48, 'wqe', 300, 0, 20, 800, 0, 30),
(49, 'zxc', 300, 0, 10, 600, 0, 20),
(50, 'wqe', 400, 0, 10, 800, 0, 10);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
