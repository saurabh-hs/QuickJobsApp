import { Divider } from "@mantine/core";
import avatar from "../assets/profileavatar.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import {Info} from "../Profile/Info";
import { setProfile } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";

const Profile=()=> {
    const dispatch=useDispatch();
    const user = useSelector((state:any)=>state.user);

    useEffect(()=>{
        getProfile(user.id).then((data:any)=>{
            dispatch(setProfile(data));
        }).catch((error:any)=>{
            console.log(error);
        });
    }, [])
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="../../public/Profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-cloud-burst-50 border-8" src={avatar} alt="" />
        </div>
        <div className="px-3 mt-16">
            <Info />
        <Divider mx="xs" my="xl"/>
            <About />
        <Divider mx="xs" my="xl"/>
            <Skills />
        <Divider mx="xs" my="xl"/>
            <Experience />
        <Divider mx="xs" my="xl"/>
            <Certificate />
    </div>
    </div>
}

export default Profile;