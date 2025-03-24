import { IconBookmark, IconBookmarkFilled, IconCalendarMonth } from '@tabler/icons-react';
import logo from "../assets/G.png";
import { Button, Divider, Text } from '@mantine/core';
import { IconClockHour3 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Card = (props:any)=> {
    return <Link to="/jobs" className='bg-cloud-burst-400 p-4 w-full flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cloud-burst-900'>
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={logo} alt="compay logo" />
                </div>
                <div>
                    <div className='text-cloud-burst-50 text-950'>{props.jobTitle}</div>
                    <div className='text-xs text-cloud-burst-100'>{props.company} &#x2022; {props.applicants} Applicants</div>
                </div>
            </div>
            {props.saved?<IconBookmarkFilled className='text-cloud-burst-100 cursor-pointer' stroke={2} />:<IconBookmark className='text-cloud-burst-100 cursor-pointer' stroke={2} />}
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-cloud-burst-600 [&>div]:text-cloud-burst-50 [&>div]:rounded-lg [&>div]:text-xs'>
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className='!text-xs text-justify !text-cloud-burst-100' lineClamp={2}>
            {props.description}
        </Text>
        <Divider size="xs"/>
        <div className='flex justify-between'>
            <div className='text-cloud-burst-100 font-semibold'>
                &#8377;{props.package}
            </div>
            <div className='flex gap-1 text-xs text-cloud-burst-100 items-center'>
            <IconClockHour3 className='h-5 w-5 text-cloud-burst-50' stroke={1.5} />{props.applied || props.interviewing?"Applied":props.offered?"Interviewed":"Posted"} {props.postedDaysAgo} days ago
            </div>
        </div>
        {(props.offered || props.interviewing)&&<Divider size="xs"/>}
        {
            props.offered&&<div className='flex gap-2'>
                <Button color="cloud-burst.0" variant="outline" fullWidth>Accept</Button>
                <Button color="cloud-burst.0" variant="light" fullWidth>Reject</Button>
            </div>
        }
        {
            props.interviewing&&<div className='flex gap-1 text-sm items-center text-cloud-burst-100'>
                <IconCalendarMonth className='text-cloud-burst-100 w-5 h-5' stroke={1.5}/> Sun, 25 August &bull; <span className='text-cloud-burst-100'>10:00 AM</span>
            </div>
        }
    </Link>
}

export default Card;