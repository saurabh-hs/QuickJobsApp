import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput, rem } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT",
}

const SignUp = () => {
    const [value, setValue] = useState('react');

    const [data, setData]=useState(form);

    const handleChange=(event:any)=>{
        if(typeof(event)=="string")setData({...data, accountType:event});
        else setData({...data, [event.target.name]:event.target.value})
    }

    return <div className="w-[30vw] px-20 text-left flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Created Account</div>
        <TextInput value={data.name} name="name" onChange={handleChange} withAsterisk label="Full Name" placeholder="Your name" />
        <TextInput value={data.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email" />
        <PasswordInput value={data.password} name="password" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />
        <PasswordInput value={data.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" />
        <Radio.Group
            value={data.accountType}
            onChange={handleChange}
            label="Select your role"
            withAsterisk
        >
            <Group mt="xs">
                <Radio className="py-4 px-6 border hover:bg-cloud-burst-900 has-[:checked]:bg-cloud-burst-400/5 has-[:checked]:border-cloud-burst-700 border-cloud-burst-300 rounded-lg" value="APPLICANT" label="Applicant" />
                <Radio className="py-4 px-6 border hover:bg-cloud-burst-900 has-[:checked]:bg-cloud-burst-400/5 has-[:checked]:border-cloud-burst-700 border-cloud-burst-300 rounded-lg" value="EMPLOYER" label="Empolyer" />
            </Group>
        </Radio.Group>
        <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
        <Button autoContrast variant="filled">Sign Up</Button>
        <div className="mx-auto">Have an account? <Link to="/login" className="text-cloud-burst-600 hover:underline">Login</Link></div>
    </div>
}

export default SignUp;