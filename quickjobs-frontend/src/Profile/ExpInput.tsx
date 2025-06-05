import { useState } from "react";
import fields from "../Data/Profile"
import SelectInput from "./SelectInput";
import { Textarea } from "@mantine/core";

const ExpInput=()=>{
    const select = fields;
    const [desc, setDesc]=useState("")
    return <div>
        <div>Edit Experience</div>
        <div>
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea value={desc} placeholder="Enter about yourself..." autosize minRows={3} onChange={(event) => setDesc(event.currentTarget.value)} />
    </div>
}

export default ExpInput;