import { IconWorldDownload } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Indicator, Avatar } from '@mantine/core';
import NavLinks from './NavLinks';
import profileImage from "../assets/profile.png";

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-cloud-burst-50 h-20 flex justify-between items-center bg-cloud-burst-950 font-['Poppins']">
      <div className="flex gap-1 items-center">
        <IconWorldDownload className="h-8 w-8 text-sangria-700" stroke={2} />
        <div className="text-3xl font-semibold text-sangria-700 ">
          QuickJobs
        </div>
      </div>
      {NavLinks()}
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <div className="text-1xl font-semibold">Saurabh</div>
          <Avatar src={profileImage} alt="it's me" />
        </div>
        <div className="bg-cloud-burst-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-cloud-burst-900 p-1.5 rounded-full">
          <Indicator color="buccaneer.1" offset={6} size={8} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  )
};

export default Header;
