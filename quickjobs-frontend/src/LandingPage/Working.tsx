import { work } from "../Data/Data";
import { Avatar } from '@mantine/core';
import avatar from "../assets/avatar1.png";

const Working=()=>{
    return <div className="mt-20">
    <div className="text-4xl text-cloud-burst-950 [&>span]:text-cloud-burst-600 font-semibold mb-3">How it <span>Works</span></div>
    <div className="text-lg mb-10 mx-auto text-cloud-burst-500 text-center w-1/2">Effortlessly navigate through the process and land your dream job.</div>
    <div className="flex px-16 justify-between items-center">
        <div className="relative">
            <img className="w-[30rem]" src="" alt="girl img" />
            <div className="w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-cloud-burst-900 rounded-xl py-3 px-1 backdrop-blur-md">
                <Avatar className="!h-16 !w-16" src={avatar} alt="it's me" />
                <div className="text-sm font-semibold text-cloud-burst-900">Complete your profile</div>
                <div className="text-xs text-cloud-burst-500">70% Completed</div>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            {
                work.map((item, index) => <div key={index} className="flex items-center gap-4">
                <div className="p-2.5 bg-cloud-burst-600 rounded-full">
                    <img className="h-12 w-12" src={`../../../public/Category/${item.name}.png`} alt={item.name} />
                </div>
                <div>
                    <div className="text-cloud-burst-900 text-xl font-semibold">
                        {item.name}
                    </div>
                    <div className="text-cloud-burst-500">{item.desc}</div>
                </div>
            </div>)
            }
        </div>
    </div>
    </div>
}

export default Working;