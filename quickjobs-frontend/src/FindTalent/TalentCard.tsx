import { IconCalendarMonth, IconHeart, IconMapPin } from '@tabler/icons-react';
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import { DateInput, TimeInput } from '@mantine/dates';
import { getProfile } from '../Services/ProfileService';
import { changeAppStatus } from '../Services/JobService';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { formatInterviewTime, openBase64PDF } from '../Services/Utilities';

const TalentCard = (props: any) => {
    const { id } = useParams();
    const [opened, { open, close }] = useDisclosure(false);
    const [app, { open: openApp, close: closeApp }] = useDisclosure(false);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<any>(null);
    const ref = useRef<HTMLInputElement>(null);
    const [profile, setProfile] = useState<any>({});
    useEffect(() => {
        if (props.applicantId) getProfile(props.applicantId).then((res) => {
            setProfile(res);
        }).catch((err) => {
            console.log(err);
        })
        else setProfile(props);
    }, [props])

    const handleOffer = (status: string) => {
        let interview: any = { id, applicantId: profile?.id, applicationStatus: status };
        if(status=="INTERVIEWING") {
            const [hours, minutes]=time.split(":").map(Number);
            date?.setHours(hours, minutes);
            interview={...interview, interviewTime:date};
        }
        changeAppStatus(interview).then((res) => {
            if(status=="INTERVIEWING")successNotification("Interview Scheduled", "Interview Scheduled Successfully");
            else if(status=="OFFERED")successNotification("Offered", "Offer had been sent Successfully");
            else successNotification("Rejected", "Applicant had been Rejected");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
            errorNotification("Error", err.response.data.errorMessage);
        })
    }
    return <div className='bg-cloud-burst-400 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cloud-burst-900'>
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-full'>
                    <Avatar size="lg" src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}` : "../assets/avatar1.png"} alt="compay logo" />
                </div>
                <div>
                    <div className='text-cloud-burst-50 text-950 text-lg'>{props.name}</div>
                    <div className='text-sm text-cloud-burst-100'>{profile?.jobTitle} &bull; {profile?.company}</div>
                </div>
            </div>
            <IconHeart className='text-cloud-burst-100 cursor-pointer' stroke={2} />
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-cloud-burst-600 [&>div]:text-cloud-burst-50 [&>div]:rounded-lg [&>div]:text-xs'>
            {
                profile?.skills?.map((skill: any, index: any) => index < 5 && <div key={index}>{skill}</div>)
            }
        </div>
        <Text className='!text-xs text-justify !text-cloud-burst-100' lineClamp={2}>
            {profile?.about}
        </Text>
        <Divider size="xs" />
        {
            props.invited ? <div className='flex gap-1 text-cloud-burst-50 text-sm items-center'>
                <IconCalendarMonth stroke={1.5} />Interview: {formatInterviewTime(props.interviewTime)}
            </div> : <div className='flex justify-between'>
                <div className='text-cloud-burst-100 font-semibold'>
                    23 LPA
                </div>
                <div className='flex gap-1 text-xs text-cloud-burst-100 items-center'>
                    <IconMapPin className='h-5 w-5 text-cloud-burst-50' stroke={1.5} /> {profile?.location}
                </div>
            </div>
        }
        <Divider size="xs" />
        <div className='flex [&>*]:w-1/2 [&>*]:p-2'>
            {
                !props.invited && <>
                    <Link to={`/talent-profile/${profile?.id}`}>
                        <Button color="cloud-burst.0" variant="outline" fullWidth>Profile</Button>
                    </Link>
                    <div>
                        {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} color="cloud-burst.0" variant="light" fullWidth>Schedule</Button> : <Button color="cloud-burst.0" variant="light" fullWidth>Message</Button>}
                    </div>
                </>
            }
            {
                props.invited && <>
                    <div>
                        <Button color="cloud-burst.0" onClick={()=>handleOffer("OFFERED")} variant="outline" fullWidth>Accept</Button>
                    </div>
                    <div>
                        <Button color="cloud-burst.0" onClick={()=>handleOffer("REJECTED")} variant="inline" fullWidth>Reject</Button>
                    </div>
                </>
            }
        </div>
        {
            (props.invited || props.posted) && <Button color="cloud-burst.8" onClick={openApp} variant="filled" fullWidth>View Application</Button>
        }
        <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
            <div className='flex flex-col gap-4'>
                <DateInput value={date} minDate={new Date()} onChange={setDate} label="Date" placeholder='Enter Date' />
                <TimeInput label="Time" value={time} onChange={(event) => setTime(event.currentTarget.value)} ref={ref} onClick={() => ref.current?.showPicker()} />
                <Button onClick={() => handleOffer("INTERVIEWING")} color="cloud-burst.8" variant="light" fullWidth>Schedule</Button>
            </div>
        </Modal>
        <Modal opened={app} onClose={closeApp} title="Application" centered>
            <div className='flex flex-col gap-4'>
                <div>
                    Email: &emsp; <a className='text-cloud-burst-800 hover:underline cursor-pointer text-center' href={`mailto:${props.email}`}>{props.email}</a>
                </div>
                <div>
                    Website: &emsp; <a target="_blank" className='text-cloud-burst-800 hover:underline cursor-pointer text-center' href={props.website}>{props.website}</a>
                </div>
                <div>
                    Resume: &emsp; <span className='text-cloud-burst-800 hover:underline cursor-pointer text-center' onClick={() => openBase64PDF(props.resume)}>{props.name}</span>
                </div>
                <div>
                    Cover Letter: &emsp; <div>{props.coverLetter}</div>
                </div>
            </div>
        </Modal>
    </div>
}

export default TalentCard;