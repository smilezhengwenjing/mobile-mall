package com.mobilemall.mobilemall.controller.param;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Data
public class GoodsParam implements Serializable {
    private String keyWords;
}
