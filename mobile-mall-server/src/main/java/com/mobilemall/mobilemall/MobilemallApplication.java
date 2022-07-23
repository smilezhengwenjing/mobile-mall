package com.mobilemall.mobilemall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.mobilemall.mobilemall.mapper")

public class MobilemallApplication {

    public static void main(String[] args) {
        SpringApplication.run(MobilemallApplication.class, args);
    }

}
