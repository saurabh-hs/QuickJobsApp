import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { changePassword, sendOtp, verifyOtp } from "../Services/UserService";
import { IconAt, IconLock } from "@tabler/icons-react";
import { signupValidation } from "../Services/FormValidation";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [passErr, setPassErr]=useState("");
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const [resendLoader, setResetLoader] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if(seconds===0){
            setResetLoader(false);
            setSeconds(60);
            interval.stop();
        }else setSeconds((s) => s-1)
    }, 1000);

    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(email).then((res) => {
            console.log(res);
            successNotification("OTP Sent Successfully", "Enter OTP to reset.");
            setOtpSent(true);
            setOtpSending(false);
            setResetLoader(true);
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
            errorNotification("OTP Sending Failed", err.response.data.errorMessage);
        })
    }

    const handleVerifyOtp=(otp:string)=>{
        verifyOtp(email, otp).then((res)=>{
            console.log(res);
            successNotification("OTP Verified", "Enter new password.");
            setVerified(true);
        }).catch((err)=>{
            console.log(err);
            errorNotification("OTP Verification Failed", err.response.data.errorMessage);
        })
    }

    const resendOtp=()=>{
        handleSendOtp();
    }

    const ChangeEmail=()=>{
        setOtpSent(false);
    }

    const handleResetPassword=()=>{
        changePassword(email, password).then((res)=>{
            console.log(res);
            successNotification("Password Changed", "Login with new password.");
            props.close();
        }).catch((err)=>{
            console.log(err);
            errorNotification("Password Reset Failed", err.response.data.errorMessage);
        })
    }

    return <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        <div className="flex flex-col gap-6">
            <TextInput value={email} name="email" size="md" onChange={(e) => setEmail(e.target.value)} leftSection={<IconAt size={16} />} label="Email" withAsterisk placeholder="Your email" rightSection={<Button loading={otpSending && !otpSent} size="xs" className="mr-1" onClick={handleSendOtp} autoContrast disabled={email === "" || otpSent} variant="filled">Send OTP</Button>} rightSectionWidth="xl" />
            {otpSent && <PinInput onComplete={handleVerifyOtp} length={6} className="mx-auto" size="md" gap="lg" type="number"/>}
            {otpSent && !verified &&
            <div>
                <Button fullWidth loading={otpSending} color="cloud-burst.6" onClick={resendOtp} autoContrast variant="light">Resend OTP</Button>
                <Button fullWidth loading={otpSending} onClick={ChangeEmail} autoContrast variant="filled">Change Email</Button>
            </div>
            }
            {
                verified && <PasswordInput value={password} error={passErr} name="password" onChange={(e)=>{setPassword(e.target.value); setPassErr(signupValidation("password", e.target.value))}} withAsterisk leftSection={<IconLock size={16} stroke={1.5} />} label="Password" placeholder="Password" />
            }
            {
                verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
            }
        </div>
    </Modal>
}

export default ResetPassword;