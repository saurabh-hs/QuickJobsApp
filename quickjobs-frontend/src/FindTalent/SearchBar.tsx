import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInputs from "../FindJobs/MultiInputs";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar=()=> {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return(
        <div className="w-full flex px-5 py-8 item-center">
            <div className="flex items-center">
                <div className="text-cloud-brust-900 bg-cloud-burst-400 rounded-full p-1 mr-2"><IconUserCircle size={25} /></div>
                <Input className="[&_input]:!placeholder-cloud-burst-900" variant="unstyled" placeholder="Talent Name" />
            </div>
            {
                searchFields.map((item, index) => {
                    return <> <div key={index} className="w-1/5" >
                        <MultiInputs title={item.title} icon={item.icon} options={item.options} />
                    </div>
                    <Divider mr="xs" size="xs" orientation="vertical" />
                    </>
                })
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider color="cloud-burst.8" size="xs" value={value} labelTransitionProps={{
                transition: 'skew-down',
                duration: 150,
                timingFunction: 'linear',
                }} onChange={setValue} />
            </div>
            
        </div>
    );
};

export default SearchBar;