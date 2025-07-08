import { IconBookmark, IconBookmarkFilled, IconCalendarMonth } from '@tabler/icons-react';
import { Button, Divider, Text } from '@mantine/core';
import { IconClockHour3 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../Services/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';

const Card = (props:any)=> {
    const dispatch = useDispatch();
    const profile = useSelector((state:any)=>state.profile);
    const handleSaveJob=()=>{
        let savedJobs:any = [...profile.savedJobs];
        if(savedJobs?.includes(props.id)) {
            savedJobs=savedJobs?.filter((id:any)=>id!==props.id);
        }else{
            savedJobs=[...savedJobs, props.id];
        }
        let updatedProfile={...profile, savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
    }
    return <div className='bg-cloud-burst-400 p-4 w-full flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cloud-burst-900'>
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={`../../public/Icons/${props.company}.png`} alt="compay logo" />
                </div>
                <div>
                    <div className='text-cloud-burst-50 text-950'>{props.jobTitle}</div>
                    <div className='text-xs text-cloud-burst-100'>{props.company} &#x2022; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
            </div>
            {profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className='cursor-pointer text-cloud-burst-800' stroke={2} />:<IconBookmark onClick={handleSaveJob} className='text-cloud-burst-100 cursor-pointer hover:text-cloud-burst-800' stroke={2} />}
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-cloud-burst-600 [&>div]:text-cloud-burst-50 [&>div]:rounded-lg [&>div]:text-xs'>
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className='!text-xs text-justify !text-cloud-burst-100' lineClamp={2}>
            {props.about}
        </Text>
        <Divider size="xs"/>
        <div className='flex justify-between'>
            <div className='text-cloud-burst-100 font-semibold'>
                &#8377;{props.packageOffered}
            </div>
            <div className='flex gap-1 text-xs text-cloud-burst-100 items-center'>
            <IconClockHour3 className='h-5 w-5 text-cloud-burst-50' stroke={1.5} />{props.applied || props.interviewing?"Applied":props.offered?"Interviewed":"Posted"} {timeAgo(props.postTime)}
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
        <Link to={`/jobs/${props.id}`}>
            <Button fullWidth color='cloud-burst.8' variant='outline'>View Job</Button>
        </Link>
    </div>
}

export default Card;