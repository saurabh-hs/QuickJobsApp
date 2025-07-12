import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInputs from "./MultiInputs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";

const SearchBar=()=> {
    const dispatch = useDispatch();
    const [value, setValue] = useState<[number, number]>([0, 300]);
    const handleChange=(event:any)=>{
            dispatch(updateFilter({salary:event}));
    }
    return(
        <div className="flex gap-2 px-5 py-5">
            {
                dropdownData.map((item, index) =><> <div key={index} className="w-1/5">
                    <MultiInputs {...item} />
                    </div>
                    <Divider mr="xs" size="xs" orientation="vertical" />
                    </>)
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider color="cloud-burst.8" size="xs" value={value} onChange={setValue} onChangeEnd={handleChange} labelTransitionProps={{
                transition: 'skew-down',
                duration: 150,
                timingFunction: 'linear',
                }} />
            </div>
            
        </div>
    );
};

export default SearchBar;