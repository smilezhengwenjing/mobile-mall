package com.mobilemall.mobilemall.controller.param;

import lombok.Data;
import java.util.Date;

import java.io.Serializable;

@Data
public class SaveOrderParam  implements Serializable {
    //订单项Id数组
    private Long[] cartItemIds;

    //地址id
    private Long addressId;

    //用户Id
    private Long userId;
}
