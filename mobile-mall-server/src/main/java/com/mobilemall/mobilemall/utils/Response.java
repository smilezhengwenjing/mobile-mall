package com.mobilemall.mobilemall.utils;

import java.util.Date;
import java.util.Objects;

/**
 * @Author {高哲浩}
 * @Date: 2022/06/15/ 19:22
 * @Description
 */
public class Response {
    private Integer code;
    private String msg;
    private String token;


    public Response(Integer code, String msg, String token) {
        this.code = code;
        this.msg = msg;
        this.token = token;
    }

    @Override
    public String toString() {
        return "Response{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                ", token='" + token + '\'' +
                '}';
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Response response = (Response) o;
        return Objects.equals(code, response.code) &&
                Objects.equals(msg, response.msg) &&
                Objects.equals(token, response.token);
    }

    @Override
    public int hashCode() {
        return Objects.hash(code, msg, token);
    }
}
