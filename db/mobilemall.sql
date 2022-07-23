/*
Navicat MySQL Data Transfer

Source Server         : zhengwj
Source Server Version : 50538
Source Host           : localhost:3306
Source Database       : mobilemall

Target Server Type    : MYSQL
Target Server Version : 50538
File Encoding         : 65001

Date: 2022-07-23 15:23:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `admin_user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `login_user_name` varchar(50) NOT NULL COMMENT '管理员登陆名称',
  `login_password` varchar(50) NOT NULL COMMENT '管理员登陆密码',
  `nick_name` varchar(50) NOT NULL COMMENT '管理员显示昵称',
  `locked` tinyint(4) DEFAULT '0' COMMENT '是否锁定 0未锁定 1已锁定无法登陆',
  PRIMARY KEY (`admin_user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES ('1', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '十三', '0');
INSERT INTO `admin_user` VALUES ('2', 'newbee-admin1', 'e10adc3949ba59abbe56e057f20f883e', '新蜂01', '0');
INSERT INTO `admin_user` VALUES ('3', 'newbee-admin2', 'e10adc3949ba59abbe56e057f20f883e', '新蜂02', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '用户主键id',
  `nick_name` varchar(50) NOT NULL DEFAULT '' COMMENT '用户昵称',
  `login_name` varchar(11) NOT NULL DEFAULT '' COMMENT '登陆名称(默认为手机号)',
  `password_md5` varchar(32) NOT NULL DEFAULT '' COMMENT 'MD5加密后的密码',
  `introduce_sign` varchar(100) NOT NULL DEFAULT '' COMMENT '个性签名',
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0' COMMENT '注销标识字段(0-正常 1-已注销)',
  `locked_flag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '锁定标识字段(0-未锁定 1-已锁定)',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '十三', '13700002703', 'e10adc3949ba59abbe56e057f20f883e', '我不怕千万人阻挡，只怕自己投降', '0', '0', '2020-05-22 08:44:57');
INSERT INTO `user` VALUES ('6', '陈尼克', '13711113333', 'e10adc3949ba59abbe56e057f20f883e', '测试用户陈尼克', '0', '0', '2020-05-22 08:44:57');
INSERT INTO `user` VALUES ('7', '18829299298', '18829299298', 'e10adc3949ba59abbe56e057f20f883e', '随新所欲，蜂富多彩', '0', '0', null);
SET FOREIGN_KEY_CHECKS=1;
