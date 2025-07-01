import { ActionIcon, Divider } from "@mantine/core";
import avatar from "../assets/profileavatar.png";
import {IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import {Info} from "../Profile/Info";
import { setProfile } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";

const Profile=(props:any)=> {
    const dispatch=useDispatch();
    const user = useSelector((state:any)=>state.user);
    const profile = useSelector((state:any)=>state.profile);
    const [edit, setEdit]=useState([false, false, false, false, false])
    const [addExp, setAddExp] = useState(false);
    const [addCert, setAddCert] = useState(false);
    const handleEdit=(index:any)=>{
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }

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
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700 justify-between">Experience <div className="flex gap-2"><ActionIcon onClick={()=>setAddExp(true)} size="lg" color="cloud-burst.9" variant="subtle">
            <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon><ActionIcon onClick={()=>handleEdit(3)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[3]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    profile?.experiences?.map((exp:any, index:any) =>  <ExpCard key={index} {...exp} edit={edit[3]} />)
                }
                {addExp&&<ExpInput add setEdit={setAddExp} />}
            </div>
        </div>
        <Divider mx="xs" my="xl"/>
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex flex-start text-cloud-burst-700 justify-between">Certifications <div className="flex gap-2"><ActionIcon onClick={()=>setAddCert(true)} size="lg" color="cloud-burst.9" variant="subtle">
            <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon><ActionIcon onClick={()=>handleEdit(4)} size="lg" color="cloud-burst.9" variant="subtle">
                {edit[4]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    profile?.certifications?.map((cert:any, index:number) =>  <CertCard key={index} edit={edit[4]} {...cert} />)
                }
                {
                    addCert&&<CertInput setEdit={setAddCert} />
                }
            </div>
        </div>
    </div>
    </div>
}

export default Profile;