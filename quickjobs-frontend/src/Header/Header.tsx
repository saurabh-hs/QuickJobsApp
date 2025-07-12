import { IconWorldDownload } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Button, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';

import { Link, useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../Services/ProfileService';
import { setProfile } from '../Slices/ProfileSlice';
import NotiMenu from './NotiMenu';

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile(user.id).then((data: any) => {
      dispatch(setProfile(data));
    }).catch((error: any) => {
      console.log(error);
    });
  }, [])
  return (
    location.pathname != "/signup" && location.pathname != "/login" ? <div className="w-full bg-black px-6 text-cloud-burst-50 h-20 flex justify-between items-center bg-cloud-burst-950 font-['Poppins']">
      <div className="flex gap-1 items-center">
        <IconWorldDownload className="h-8 w-8 text-sangria-700" stroke={2} />
        <div className="text-3xl font-semibold text-sangria-700 ">
          QuickJobs
        </div>
      </div>
      {NavLinks()}
      <div className="flex gap-4 items-center">
        {user ? <ProfileMenu /> : <Link to="/login"><Button variant="subtle" color='cloud-burst.8'>Login</Button></Link>}
        <div className="bg-cloud-burst-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        {user?<NotiMenu />:<></>}
      </div>
    </div> : <></>
  )
};

export default Header;
