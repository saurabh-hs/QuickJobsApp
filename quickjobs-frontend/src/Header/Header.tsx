import { IconWorldDownload } from '@tabler/icons-react';

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
      <div>
        <IconWorldDownload />
        QuickJobs
      </div>
      <div>links</div>
      <div>profile</div>
    </div>
  );
};

export default Header;
