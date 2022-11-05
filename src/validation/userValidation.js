import * as YUP from "yup";

export const userSchema= YUP.object().shape({
    username : YUP.string().min(2,"نام کاربری باید بیشتر از دو حرف باشد").required("نام کاربری الزامی می باشد"),
    password : YUP.string().min(5," بیشتر از 5 کاراکتر باشد").required("  کلمه عبور الزامی می باشد")
})