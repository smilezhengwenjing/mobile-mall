package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
@Repository
public interface UserMapper {
    //登录
    @Select("select * from user where login_name=#{uname} and password_md5=#{pwd}")
    User login(@Param("uname")String uname, @Param("pwd") String pwd);


    User selectByLoginName(String loginName);
    int insertSelective(User user);
}
