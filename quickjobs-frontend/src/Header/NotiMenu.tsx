import { Indicator, Menu, Notification, rem } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNotifications, readNotifications } from "../Services/NotiService";
import { useNavigate } from "react-router-dom";

const NotiMenu = () => {
    const navigate=useNavigate();
    const user = useSelector((state: any) => state.user);
    const [notifications, setNotifications]=useState<any>([]);
    useEffect(()=>{
        getNotifications(user.id).then((res)=>{
            setNotifications(res);
        }).catch((err)=>console.log(err));
    }, [user]);
    const unread=(index:number)=>{
        let notis=[...notifications];
        notis.filter((i:number)=>i!=index);
        setNotifications(notis);
        readNotifications(notifications[index].id).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
    const [opened, setOpened] = useState(false);
    return <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
        <Menu.Target>
            <div className="bg-cloud-burst-900 p-1.5 rounded-full">
                <Indicator disabled={notifications.length<=0} color="buccaneer.1" offset={6} size={8} processing>
                    <IconBell stroke={1.5} />   
                </Indicator>
            </div>
        </Menu.Target>

        <Menu.Dropdown onChange={() => setOpened(true)}>
            <div className="flex flex-col gap-1">
                {
                    notifications.map((noti:any, index:number)=> <Notification onClick={()=>{
                        navigate(noti.route);
                        setOpened(false);
                        unread(index);
                    }} key={index} onClose={()=>unread(index)} className="hover:bg-cloud-burst-900 cursor-pointer" icon={<IconCheck style={{width: rem(20), height: rem(20) }}/>} color="teal" title={noti.action} mt="md">{noti.message}</Notification>)
                }
                {
                    notifications.length==0 && <div className="text-center text-cloud-burst-600">No Notifications</div>
                }
            </div>
          
        </Menu.Dropdown>
    </Menu>
}

export default NotiMenu;