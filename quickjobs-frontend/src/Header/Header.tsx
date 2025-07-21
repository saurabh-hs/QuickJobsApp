import { IconWorldDownload, IconX } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Burger, Button, Drawer } from '@mantine/core';
import NavLinks from './NavLinks';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../Services/ProfileService';
import { setProfile } from '../Slices/ProfileSlice';
import NotiMenu from './NotiMenu';
import { setUser } from '../Slices/UserSlice';
import { setupResponseInterceptor } from '../Interceptor/AxoisInterceptor';
import { jwtDecode } from 'jwt-decode';
import { useDisclosure } from '@mantine/hooks';

const links = [
  { name: 'Find Jobs', url: 'find-jobs' },
  { name: 'Find Talent', url: 'find-talent' },
  { name: 'Post Job', url: 'post-job/0' },
  { name: 'Posted Job', url: 'posted-job/0' },
  { name: 'Job History', url: 'job-history' },
  { name: 'Sign Up', url: 'signup' }
];

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.jwt);

  useEffect(() => {
    setupResponseInterceptor(navigate);

  }, [navigate]);

  useEffect(() => {
    if (token != "") {
      const decoded = jwtDecode(localStorage.getItem("token") || "");
      dispatch(setUser({ ...decoded, email: decoded.sub }));
    }
    getProfile(user?.profileId).then((res) => {
      dispatch(setProfile(res));
    }).catch((err) => {
      console.log(err);
    });
  }, [token, navigate]);
  return (
    location.pathname != "/signup" && location.pathname != "/login" ? <div className="w-full bg-black px-6 text-cloud-burst-50 h-20 flex justify-between items-center bg-cloud-burst-950 font-['Poppins']">
      <div className="flex gap-1 items-center">
        <IconWorldDownload className="h-8 w-8 text-sangria-700" stroke={2} />
        <div className="xs-mx:hidden text-3xl font-semibold text-sangria-700 ">
          QuickJobs
        </div>
      </div>
      {NavLinks()}
      <div className="flex gap-4 items-center">
        {user ? <ProfileMenu /> : <Link to="/login"><Button variant="subtle" color='cloud-burst.8'>Login</Button></Link>}
        <div className="bg-cloud-burst-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        {user ? <NotiMenu /> : <></>}
        {

        }
        <Burger className='bs:hidden' opened={opened} onClick={open} aria-label='Toggle navigation' />
        <Drawer size="xs" overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} position='right' opened={opened} onClose={close} closeButtonProps={{
          icon: <IconX size={30} />,
        }}>
          <div className='flex flex-col gap-6'>
          {links.map((link, index) => (
            <div key={index}
              className= "h-full flex items-center"
            >
              <Link className='hover:text-cloud-burst-800 text-xl' key={index} to={link.url}>
                {link.name}
              </Link>
            </div>
          ))}
          </div>
        </Drawer>
      </div>
    </div> : <></>
  )
};

export default Header;
