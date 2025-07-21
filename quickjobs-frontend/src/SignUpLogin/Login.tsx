import { Button, LoadingOverlay, PasswordInput, TextInput, rem } from "@mantine/core";
import { IconAt, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";
import { successNotification } from "../Services/NotificationService";
import { setJwt } from "../Slices/JwtSlice";
import { loginUser } from "../Services/AuthService";
import { jwtDecode } from "jwt-decode";
const form = {
    email: "",
    password: ""
}

const Login = () => {
    const [loading, setLoading] = useState(false);
    const dispatch=useDispatch();
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [opened, { open, close }] = useDisclosure(false);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const handleChange = (event: any) => {
        setFormError({ ...formError, [event.target.name]: "" });
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if (valid) {
            setLoading(true);
            loginUser(data).then((res) => {
                successNotification("Login Successful", "Redirecting to home page...");
                dispatch(setJwt(res.jwt));
                const decoded = jwtDecode(res.jwt);
                dispatch(setUser({...decoded, email:decoded.sub}));
                setTimeout(() => {
                    // dispatch(setUser(res));
                    navigate("/");
                }, 2000)
            }).catch((err) => {
                setLoading(false);
                console.log(err);
                notifications.show({
                    title: 'User Registration Failed',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{ width: "90%", height: "90%" }} />,
                    color: "red",
                    withBorder: true,
                    className: "!border-red-500"
                });
            });
        }

    }

    return <>
    <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'cloud-burst.8', type: 'bars' }}
        />
    <div className="w-[28vw] px-20 text-left flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Created Account</div>
        <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email" />
        <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />
        <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Login</Button>
        <div className="mx-auto">Don't have an account? <span className="text-cloud-burst-600 hover:underline cursor-pointer" onClick={() => { navigate("/signup"); setFormError(form); setData(form) }}>SignUp</span></div>
        <div onClick={open} className="text-cloud-burst-900 hover:underline cursor-pointer text-center">
            Forget Password
        </div>
    </div>
        <ResetPassword opened={opened} close={close} />
    </>
}

export default Login;