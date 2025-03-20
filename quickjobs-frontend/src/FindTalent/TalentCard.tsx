import { IconCalendarMonth, IconHeart, IconMapPin } from '@tabler/icons-react';
import logo from "../assets/profileavatar.png";
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useRef, useState } from 'react';
import { DateInput, TimeInput } from '@mantine/dates';

const TalentCard = (props:any)=> {
    const [opened, {open, close}] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
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
        {
            props.invited?<div className='flex gap-1 text-cloud-burst-50 text-sm items-center'>
                <IconCalendarMonth stroke={1.5}/>Interview: August 27, 2025 10:00 AM
            </div>:<div className='flex justify-between'>
            <div className='text-cloud-burst-100 font-semibold'>
               {props.expectedCtc}
            </div>
            <div className='flex gap-1 text-xs text-cloud-burst-100 items-center'>
                    <IconMapPin className='h-5 w-5 text-cloud-burst-50' stroke={1.5} /> {props.location}
            </div>
            </div>
        }
        <Divider size="xs"/>
        <div className='flex [&>*]:w-1/2 [&>*]:p-2'>
            {
                !props.invited && <>
                <Link to="/talent-profile">
                <Button color="cloud-burst.0" variant="outline" fullWidth>Profile</Button>
            </Link>
            <div>
                {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5"/>} color="cloud-burst.0" variant="light" fullWidth>Schedule</Button>:<Button color="cloud-burst.0" variant="light" fullWidth>Message</Button>}
            </div>
                </>
            }
            {
                props.invited && <>
                <div>
                <Button color="cloud-burst.0" variant="outline" fullWidth>Accept</Button>
                </div>
                <div>
                <Button color="cloud-burst.0" variant="inline" fullWidth>Reject</Button>
                </div>
                </>
            }
            
        </div>
        <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
            <div className='flex flex-col gap-4'>
                <DateInput value={value} minDate={new Date()} onChange={setValue} label="Date" placeholder='Enter Date' />
                <TimeInput label="Time" ref={ref} onClick={()=> ref.current?.showPicker()} />
                <Button color="cloud-burst.8" variant="light" fullWidth>Schedule</Button>
            </div>
        </Modal>
    </div>
}

export default TalentCard;