import { Divider, Input, RangeSlider } from "@mantine/core";
import React, { useState } from "react";
import MultiInputs from "../FindJobs/MultiInputs";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";

const SearchBar=()=> {
    const dispatch = useDispatch();
    const [value, setValue] = useState<[number, number]>([0, 50]);
    const [name, setName]=useState('');
    const handleChange=(name:any, event:any)=>{
        if(name=="exp") dispatch(updateFilter({exp:event}));
        else{
            dispatch(updateFilter({name:event.target.value}));
            setName(event.target.value);
        }
    }
    return(
        <div className="w-full flex px-5 py-8 item-center">
            <div className="flex items-center">
                <div className="text-cloud-brust-900 bg-cloud-burst-400 rounded-full p-1 mr-2"><IconUserCircle size={25} /></div>
                <Input defaultValue={name} onChange={(e)=>handleChange("name", e)} className="[&_input]:!placeholder-cloud-burst-900" variant="unstyled" placeholder="Talent Name" />
            </div>
            {
                searchFields.map((item, index) => {
                    return <React.Fragment key={index}> <div className="w-1/5" >
                        <MultiInputs title={item.title} icon={item.icon} options={item.options} />
                    </div>
                    <Divider mr="xs" size="xs" orientation="vertical" />
                    </React.Fragment>
                })
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between">
                    <div>Experience (Year)</div>
                    <div>{value[0]} - {value[1]}</div>
                </div>
                <RangeSlider minRange={1} onChangeEnd={(e)=>handleChange("exp", e)} color="cloud-burst.8" min={1} max={50} size="xs" value={value} labelTransitionProps={{
                transition: 'skew-down',
                duration: 150,
                timingFunction: 'linear',
                }} onChange={setValue} />
            </div>
            
        </div>
    );
};

export default SearchBar;