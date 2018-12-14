/*
Navicat MySQL Data Transfer

Source Server         : xiaopeng
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : db_student_admin

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-14 13:01:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', '15892087933', '');
INSERT INTO `user_info` VALUES ('9', '17318016474', '123456ffda');
INSERT INTO `user_info` VALUES ('8', '15892087938', 'qqqqqqqqq4');
INSERT INTO `user_info` VALUES ('7', '15892087938', 'qqqqqqqqq4');
INSERT INTO `user_info` VALUES ('10', '17318016474', '123456ffda');
INSERT INTO `user_info` VALUES ('11', '15892087934', 'hsgfhfg2525');
INSERT INTO `user_info` VALUES ('12', '15892087934', 'hsgfhfg2525');
INSERT INTO `user_info` VALUES ('13', '15892087937', 'fafdf5566');
INSERT INTO `user_info` VALUES ('14', '15892087937', 'fafdf5566');
INSERT INTO `user_info` VALUES ('15', '15892087935', '4raftttgg');
INSERT INTO `user_info` VALUES ('16', '15892087936', 'wwwwwwe8');
INSERT INTO `user_info` VALUES ('17', '15892087932', 'www123');
INSERT INTO `user_info` VALUES ('18', '15892087932', 'www123');
INSERT INTO `user_info` VALUES ('19', '15892087932', 'www123');
INSERT INTO `user_info` VALUES ('20', '15892087932', 'www123');
INSERT INTO `user_info` VALUES ('21', '15877777777', '111111fdagfag');
INSERT INTO `user_info` VALUES ('22', '15877777778', 'fadddddddd5454');
INSERT INTO `user_info` VALUES ('23', '15877788888', 'adfafdfd4534');
