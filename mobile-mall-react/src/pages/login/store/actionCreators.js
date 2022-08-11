import { post } from "@/utils/request";
import { notification } from 'antd';
import { actionTypes } from "./index";
const changeRegister = () => ({
    type: actionTypes.CHANGE_REGISTER,
    value: true
})
export const register = (param) => {
    return (dispatch) => {
        post('/user/register',param).then((res) => {
            const resultCode = res.resultCode;
            if (resultCode===200) {
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

