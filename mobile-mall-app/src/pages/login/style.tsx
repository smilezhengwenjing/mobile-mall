import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const RegisterWrapper = styled.div`
    padding-top:30px;
    .user-form-logo{
        width:450px;
        text-align:center;
        margin-bottom:25px;
    }
    .user-form-card{
        border:1px solid #e8e8e8;
        border-radius:8px;
        padding:15px 30px 30px;
        background:white;
        .user-form-title{
            text-align:center;
            margin-bottom:20px;
        }
        .user-form-title h2{
            color:#0085d0;
        }
        .user-form-group{
           margin-bottom:20px;
        }
        .user-form-input{
            width:100%;
            height:40px;
            margin-bottom:20px;
        }
        .form-control{
            box-sizing: border-box;
            padding: 0px 20px 2px;
            border-radius:6px;
            background-color:#f5f5f5;
            color:#555555;
            border:1px solid #e8e8e8;
            width:100%;
            height:100%;
        }
        .form-control-button{
            box-sizing:border-box;
            background-color:#0085d0;
            color:white;
            width:100%;
            height:40px;
            border:1px solid #e8e8e8;
            border-radius:6px;
            padding: 0px 20px 2px;
            text-align:center;
        }
    }
    .user-form-remind{
        text-align:center;
    }
`;
