import {
    post
} from "@/utils/request";
import {
    notification
} from 'antd';
import {
    actionTypes
} from "./index";

import history from '@/utils/history'
const changeRegister = () => ({
    type: actionTypes.CHANGE_REGISTER,
    value: true
})
export const register = (param) => {
    return (dispatch) => {
        post('/user/register', param).then((res) => {
            const resultCode = res.resultCode;
            if (resultCode === 200) {
                dispatch(changeRegister())
                notification['success']({
                    message: '注册成功',
                });
            } else {
                notification['error']({
                    message: '注册失败',
                });
            }
        })
    }
}


export const login = (accout, password) => {
    return () => {
        // let para = {
        //     "loginName": accout,
        //     "password": password
        // }
        const path = '/Home';
        history.push(path);
        // post('/user/login', para).then((res) => {
        //     const result = res.code;
        //     if (result === 200) {

        //         const path = '/Home';
        //         history.push(path);
        //         debugger
        //         notification['success']({
        //             message: '登录成功',
        //         });
        //         return true;

        //     } else {
        //         notification['error']({
        //             message: '登录失败',
        //         });
        //     }
        // })
    }
}