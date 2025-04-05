import { IconWorldDownload } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandTelegram } from '@tabler/icons-react';
import { IconBrandYoutube } from '@tabler/icons-react';
import { footerLinks } from '../Data/Data';
import { useLocation } from 'react-router-dom';

const Footer=()=> {
    const location = useLocation();
    return location.pathname!="/signup"&&location.pathname!="/login"?<div className="pt-20 pb-5 flex gap-5 justify-around bg-cloud-burst-50 font-['Poppins']">
        <div className='w-1/4 flex flex-col gap-4'>
            <div className="flex gap-1 items-center">
                <IconWorldDownload className="h-8 w-8 text-cloud-burst-950" stroke={2} />
            <div className="text-xl font-bold text-cloud-burst-950 ">
                QuickJobs
            </div>
            </div>
            <div className='text-sm text-cloud-burst-500'>
                Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
            </div>
            <div className="flex gap-3 [&>div]:bg-cloud-burst-300 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-cloud-burst-500">
            <div><IconBrandInstagram stroke={2} /></div>
            <div><IconBrandTelegram stroke={2} /></div>
            <div><IconBrandYoutube stroke={2} /></div>
        </div>
        </div>
        {
            footerLinks.map((item, index) => <div key={index}>
                <div className="text-lg font-semibold mb-4 text-cloud-burst-900">{item.title}</div>
                    {
                        item.links.map((link, index) => <div key={index} className="text-cloud-burst-300 text-sm hover:text-cloud-burst-500 cursor-pointer mb-1
                        hover:translate-x-2 transition duration-300 ease-in-out">{link}</div>)
                    }
                </div>)
        }
    </div>:<></>
}

export default Footer;