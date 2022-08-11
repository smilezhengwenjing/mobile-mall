package com.mobilemall.mobilemall.mapper;

import com.mobilemall.mobilemall.entity.User;
import org.springframework.stereotype.Repository;
@Repository
public interface UserMapper {
      User selectByLoginName(String loginName);
      int insertSelective(User user);
}
