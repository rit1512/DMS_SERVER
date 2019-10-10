-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 01, 2019 at 01:47 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dms1`
--

-- --------------------------------------------------------

--
-- Table structure for table `allocate`
--

CREATE TABLE `allocate` (
  `allocate_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_cat` varchar(255) NOT NULL,
  `quntity` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `allocate`
--

INSERT INTO `allocate` (`allocate_id`, `user_name`, `product_name`, `product_cat`, `quntity`, `date`, `status`) VALUES
(1, 'priyan', 'dairy milk', 'choco', '10', '2019-09-28 18:29:12.076', '1');

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `area_id` int(11) NOT NULL,
  `area_name` varchar(255) NOT NULL,
  `area_brief` text NOT NULL,
  `area_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`area_id`, `area_name`, `area_brief`, `area_status`) VALUES
(1, 'Airoli', 'sec 2, new mumbai', '1'),
(2, 'Mulund', 'mulund east,near station  mumbai 400080', '0'),
(3, 'nahur', 'omkar', '1'),
(4, 'thane', 'near court naka', '1'),
(5, 'vashi', 'sec 2', '1'),
(6, 'nahur', 'sec 3', '1');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`, `product_name`, `product_id`, `status`) VALUES
(1, 'Parle', 'Biscit', NULL, '1'),
(2, 'Dimond', 'chips', NULL, '1'),
(3, 'Haldiram', 'sev', NULL, '1'),
(4, 'puma', 'chips', NULL, '1'),
(5, 'hali', '', NULL, '1'),
(6, 'halisar', 'chips', NULL, '1'),
(7, 'qwe', '2', NULL, '1'),
(8, 'qwrw', 'haldiram', NULL, '1'),
(9, 'haldiram', 'Biscuit', NULL, '0'),
(10, 'puma', 'dosa', NULL, '1'),
(11, 'parle', 'asq', NULL, '1'),
(12, 'parle', 'asq', NULL, '1'),
(13, 'adidas', 'shoes', NULL, '1');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_detail` varchar(255) DEFAULT NULL,
  `company_mobile` varchar(13) NOT NULL,
  `company_email` varchar(255) DEFAULT NULL,
  `company_user_name` varchar(255) DEFAULT NULL,
  `company_password` text NOT NULL,
  `company_profile_pic` text,
  `company_status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_detail`, `company_mobile`, `company_email`, `company_user_name`, `company_password`, `company_profile_pic`, `company_status`) VALUES
(1, 'Harikesh', 'Parag Dinesh Gupta', '884566137', 'sahu@gmail.com', 'parag@gmail.com', '123', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cost`
--

CREATE TABLE `cost` (
  `cost_id` int(11) NOT NULL,
  `product_sku_id` int(11) NOT NULL,
  `transication_id` int(11) NOT NULL,
  `cost_sku` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `godown`
--

CREATE TABLE `godown` (
  `godown_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_cat` varchar(255) NOT NULL,
  `quntity` int(11) NOT NULL,
  `cost_per_uint` varchar(255) NOT NULL,
  `total_cost` varchar(255) NOT NULL,
  `date_of_coming` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `total_box` varchar(255) NOT NULL,
  `box_amt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `godown`
--

INSERT INTO `godown` (`godown_id`, `product_name`, `product_cat`, `quntity`, `cost_per_uint`, `total_cost`, `date_of_coming`, `status`, `total_box`, `box_amt`) VALUES
(1, 'parle', '20-20', 12, '21', '252', '2019-09-28', '1', '', ''),
(2, 'Britayniya', '50-50', 10, '21', '210', '2019-09-28', '1', '', ''),
(3, 'Britayniya', 'maari', 10, '21', '210', '2019-09-28', '1', '', ''),
(4, 'dairy milk', 'choco', 10, '21', '210', '2019-09-28 16:05:42.009', '1', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `transaction_initiated_by` varchar(255) NOT NULL,
  `payment_collected_to` varchar(255) NOT NULL,
  `payment` varchar(255) NOT NULL,
  `transaction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `price_id` int(11) NOT NULL,
  `product_sku_id` int(11) NOT NULL,
  `price_sku` varchar(255) NOT NULL,
  `transication_id` int(11) NOT NULL,
  `status` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_cat_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_cat` varchar(11) NOT NULL,
  `quantity_status` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_cat_id`, `product_name`, `product_cat`, `quantity_status`, `status`) VALUES
(3, NULL, 'biscuit', 'undefined', 'undefined', '0'),
(4, NULL, 'undefined', 'undefined', 'undefined', '0'),
(5, NULL, 'sdfghj', '', '', '0'),
(6, NULL, 'ase', '', '', '0'),
(7, NULL, 'qwsdr', '', '', '0'),
(8, NULL, 'aqwe', '', '', '0'),
(9, NULL, 'abc', '', '', '0'),
(10, NULL, 'qaz', '', '', '0'),
(11, NULL, 'qaz', '', '', '0'),
(12, NULL, 'kit', '', '140', '0'),
(13, NULL, 'qw', '', '48', '0'),
(14, NULL, 'undefined', 'undefined', 'undefined', '0'),
(15, NULL, 'undefined', 'undefined', 'undefined', '0'),
(16, NULL, 'chips', 'cream', '100', '1'),
(17, NULL, 'haldiram', 'tomato', '120', '1'),
(18, NULL, 'dosa', 'tomato', '4', '1'),
(19, NULL, 'choclate', 'dairy milk', '120', '1');

-- --------------------------------------------------------

--
-- Table structure for table `product_cat`
--

CREATE TABLE `product_cat` (
  `product_cat_id` int(11) NOT NULL,
  `product_cat` varchar(255) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_cat`
--

INSERT INTO `product_cat` (`product_cat_id`, `product_cat`, `product_description`, `status`) VALUES
(1, 'qwe', 'azsx', '0'),
(2, 'cream', 'orange', '1'),
(3, 'undefined', 'undefined', '0'),
(4, 'chips', 'onion', '0'),
(5, 'erthj', 'sdfghm', '0');

-- --------------------------------------------------------

--
-- Table structure for table `product_packaging`
--

CREATE TABLE `product_packaging` (
  `packaging_id` int(11) NOT NULL,
  `product_sku_id` int(11) NOT NULL,
  `unit_in_box` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_sku`
--

CREATE TABLE `product_sku` (
  `product_sku_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `shop_id` int(11) NOT NULL,
  `shop_name` varchar(255) NOT NULL,
  `shop_email` varchar(255) NOT NULL,
  `shop_location` varchar(255) NOT NULL,
  `Contact_No` varchar(255) NOT NULL,
  `shop_pic` varchar(255) NOT NULL,
  `shop_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shop`
--

INSERT INTO `shop` (`shop_id`, `shop_name`, `shop_email`, `shop_location`, `Contact_No`, `shop_pic`, `shop_status`) VALUES
(1, 'krishna dhudh ki dukan', 'krishna@gmail.com', 'mulund east', '9876543210', 'undefined', '1'),
(2, 'Shree Dairy', 'shree@gmail.com', 'thane esat', '2314569', '', '1'),
(3, 'rit', 'ar@gmail.com', 'jog', '8977976', 'undefined', '1'),
(4, 'qwe', 'a@gmail.com', 'airoli', '8080456987', '', '1'),
(5, 'qwe', 'a@gmail.com', 'airoli', '8080456987', '', '0'),
(6, 'qwe', 'a@gmail.com', 'airoli', '8080456987', '', '0');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transaction_id` int(11) NOT NULL,
  `transaction_type_id` int(11) NOT NULL,
  `transaction_date` varchar(255) NOT NULL,
  `transaction_initiated_by` varchar(255) NOT NULL,
  `transaction_to` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_type`
--

CREATE TABLE `transaction_type` (
  `transaction_type_id` int(11) NOT NULL,
  `transaction_type` varchar(255) NOT NULL,
  `transaction_detail` varchar(255) NOT NULL,
  `transaction_initiated_by` varchar(255) NOT NULL,
  `transaction_to` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `area_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `mobile`, `email`, `password`, `profile_pic`, `area_id`, `status`, `resetPasswordToken`, `resetPasswordExpires`) VALUES
(3, 'Harikesh Sahu', '8654427584', 'sahu@gmail.com', '60916fb93e1656f8519c', '', '1', '1', 'f78d5820d852d05fcabf0d92af580093e5b4d29b', '1567764221855'),
(4, 'priyank', '9876543211', 'priyank@gmail.com', '8f6b6ccd62b3f3f9614e', 'undefined', '', '1', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allocate`
--
ALTER TABLE `allocate`
  ADD PRIMARY KEY (`allocate_id`);

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`area_id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `cost`
--
ALTER TABLE `cost`
  ADD PRIMARY KEY (`cost_id`),
  ADD KEY `product_sku_id` (`product_sku_id`),
  ADD KEY `transication_id` (`transication_id`);

--
-- Indexes for table `godown`
--
ALTER TABLE `godown`
  ADD PRIMARY KEY (`godown_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`price_id`),
  ADD KEY `product_sku_id` (`product_sku_id`,`transication_id`),
  ADD KEY `transication_id` (`transication_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_cat_id` (`product_cat_id`);

--
-- Indexes for table `product_cat`
--
ALTER TABLE `product_cat`
  ADD PRIMARY KEY (`product_cat_id`);

--
-- Indexes for table `product_packaging`
--
ALTER TABLE `product_packaging`
  ADD PRIMARY KEY (`packaging_id`),
  ADD KEY `product_sku_id` (`product_sku_id`);

--
-- Indexes for table `product_sku`
--
ALTER TABLE `product_sku`
  ADD PRIMARY KEY (`product_sku_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `shop_order`
--
ALTER TABLE `shop_order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `transaction_type_id` (`transaction_type_id`);

--
-- Indexes for table `transaction_type`
--
ALTER TABLE `transaction_type`
  ADD PRIMARY KEY (`transaction_type_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `area_id` (`area_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allocate`
--
ALTER TABLE `allocate`
  MODIFY `allocate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `area_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `cost`
--
ALTER TABLE `cost`
  MODIFY `cost_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `godown`
--
ALTER TABLE `godown`
  MODIFY `godown_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `price_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `product_cat`
--
ALTER TABLE `product_cat`
  MODIFY `product_cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `product_packaging`
--
ALTER TABLE `product_packaging`
  MODIFY `packaging_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_sku`
--
ALTER TABLE `product_sku`
  MODIFY `product_sku_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `shop_order`
--
ALTER TABLE `shop_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transaction_type`
--
ALTER TABLE `transaction_type`
  MODIFY `transaction_type_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `cost`
--
ALTER TABLE `cost`
  ADD CONSTRAINT `cost_ibfk_1` FOREIGN KEY (`product_sku_id`) REFERENCES `product_sku` (`product_sku_id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`transaction_id`);

--
-- Constraints for table `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `price_ibfk_1` FOREIGN KEY (`product_sku_id`) REFERENCES `product_sku` (`product_sku_id`),
  ADD CONSTRAINT `price_ibfk_2` FOREIGN KEY (`transication_id`) REFERENCES `transaction` (`transaction_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_cat_id`) REFERENCES `product_cat` (`product_cat_id`);

--
-- Constraints for table `product_packaging`
--
ALTER TABLE `product_packaging`
  ADD CONSTRAINT `product_packaging_ibfk_1` FOREIGN KEY (`product_sku_id`) REFERENCES `product_sku` (`product_sku_id`);

--
-- Constraints for table `product_sku`
--
ALTER TABLE `product_sku`
  ADD CONSTRAINT `product_sku_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`transaction_type_id`) REFERENCES `transaction_type` (`transaction_type_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
