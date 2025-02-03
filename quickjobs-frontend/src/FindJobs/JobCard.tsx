import { IconBookmark } from '@tabler/icons-react';
import logo from "../assets/G.png";
import { Divider, Text } from '@mantine/core';
import { IconClockHour3 } from '@tabler/icons-react';

const JobCard=()=> {
    return <div className='bg-cloud-burst-400 p-4 w-72 flex flex-col gap-3 rounded-xl'>
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={logo} alt="compay logo" />
                </div>
                <div>
                    <div className='text-cloud-burst-50 text-950'>Product Designer</div>
                    <div className='text-xs text-cloud-burst-100'>Meta &#x2022; 25 Applicants</div>
                </div>
            </div>
            <IconBookmark className='text-cloud-burst-100' stroke={2} />
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-cloud-burst-600 [&>div]:text-cloud-burst-50 [&>div]:rounded-lg [&>div]:text-xs'>
            <div>Entry Level</div>
            <div>Intermediate</div>
            <div>Experienced</div>
        </div>
        <Text className='!text-xs text-justify !text-cloud-burst-100' lineClamp={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe, corrupti cupiditate similique reprehenderit rem! Architecto, suscipit. Reiciendis ratione deserunt vel nisi.
        </Text>
        <Divider size="xs"/>
        <div className='flex justify-between'>
            <div className='text-cloud-burst-100 font-semibold'>
                &#8377;24 LPA
            </div>
            <div className='flex gap-1 text-xs text-cloud-burst-100 items-center'>
            <IconClockHour3 className='h-5 w-5 text-cloud-burst-50' stroke={1.5} /> Posted 12 days ago
            </div>
        </div>
    </div>
}

export default JobCard;