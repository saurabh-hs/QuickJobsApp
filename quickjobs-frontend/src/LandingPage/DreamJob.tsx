import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import mainImage from "../assets/Boy.png";
import avatar from "../assets/profile.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import Google from "../assets/G.png";

const DreamJob = () => {
  return (
    <div className="flex items-center px-15">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-cloud-burst-950 [&>span]:text-cloud-burst-600">
          Find your <span>dream</span> <span>job</span> with us
        </div>
        <div className="text-lg text-cloud-burst-700">
          Thousands of Jobs at here. Find Your New Job Today! New Job Postings
          Eveyday
        </div>
        <div className="flex gap-3 mt-5 ml-5">
          <TextInput
            className=" bg-cloud-burst-300 rounded-lg p-1 px-2 text-cloud-burst-800 [&_input]:!text-cloud-burst-700"
            radius="md"
            label="Job Title"
            placeholder="Enter job title"
          />
          <TextInput
            className="bg-cloud-burst-300 rounded-lg p-1 px-2 text-cloud-burst-800 [&_input]:!text-cloud-burst-700"
            radius="md"
            label="Job Type"
            placeholder="Enter job type"
          />
          <div className="flex items-center justify-center h-full w-20 bg-cloud-burst-500 text-cloud-burst-100 rounded-lg p-2 hover:bg-cloud-burst-700 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[38rem] relative">
          <img src={mainImage} alt="Main Img" className="mix-blend-multiply"/>
          <div className="absolute right-10 w-fit top-[60%] border-cloud-burst-900 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-cloud-burst-900 font-semibold">
              10K+ got job
            </div>
            <Avatar.Group>
              <Avatar src={avatar} />
              <Avatar src={avatar1} />
              <Avatar src={avatar2} />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute left-6 w-fit top-[3%] border-cloud-burst-900 border rounded-lg p-2 backdrop-blur-md flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 p-1 bg-cloud-burst-200 rounded-lg">
                <img src={Google} alt="Google img" />
              </div>
              <div className="text-sm text-cloud-burst-700">
                <div>Software Engineer</div>
                <div className="text-cloud-burst-900 text-xs">New York</div>
              </div>
            </div>
            <div className="flex gap-2 justify-around text-cloud-burst-900 text-xs">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
