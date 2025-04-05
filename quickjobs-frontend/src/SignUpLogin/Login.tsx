import { Button, PasswordInput, TextInput, rem } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login=()=> {
    return <div className="w-[28vw] px-20 text-left flex flex-col justify-center gap-3">
    <div className="text-2xl font-semibold">Created Account</div>
    <TextInput withAsterisk leftSection={<IconAt style={{width: rem(16), height: rem(16)}} />} label="Email" placeholder="Your email" />
    <PasswordInput withAsterisk leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5} />} label="Password" placeholder="Password" />
    <Button autoContrast variant="filled">Login</Button>
    <div className="mx-auto">Don't have an account? <Link to="/signup" className="text-cloud-burst-600 hover:underline">SignUp</Link></div>
</div>
}

export default Login;