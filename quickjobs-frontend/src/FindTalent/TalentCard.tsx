import { IconHeart, IconMapPin } from '@tabler/icons-react';
import logo from "../assets/profileavatar.png";
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const TalentCard = (props:any)=> {
    return <div className='bg-cloud-burst-400 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cloud-burst-900'>
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-full'>
                    <Avatar size="lg" src={logo} alt="compay logo" />
                </div>
                <div>
                    <div className='text-cloud-burst-50 text-950 text-lg'>{props.name}</div>
                    <div className='text-sm text-cloud-burst-100'>{props.role} &bull; {props.company}</div>
                </div>
            </div>
            <IconHeart className='text-cloud-burst-100 cursor-pointer' stroke={2} />
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-cloud-burst-600 [&>div]:text-cloud-burst-50 [&>div]:rounded-lg [&>div]:text-xs'>
            {
                props.topSkills?.map((skill:any, index:any) => <div key={index}>{skill}</div>)
            }
        </div>
        <Text className='!text-xs text-justify !text-cloud-burst-100' lineClamp={2}>
            {props.about}
        </Text>
        <Divider size="xs"/>
        <div className='flex justify-between'>
            <div className='text-cloud-burst-100 font-semibold'>
               {props.expectedCtc}
            </div>
            <div className='flex gap-1 text-xs text-cloud-burst-100 items-center'>
            <IconMapPin className='h-5 w-5 text-cloud-burst-50' stroke={1.5} /> {props.location}
            </div>
        </div>
        <Divider size="xs"/>
        <div className='flex [&>*]:w-1/2 [&>*]:p-2'>
            <Link to="/talent-profile">
                <Button color="cloud-burst.0" variant="outline" fullWidth>Profile</Button>
            </Link>
            <div>
                <Button color="cloud-burst.0" variant="light" fullWidth>Message</Button>
            </div>
        </div>
    </div>
}

export default TalentCard;