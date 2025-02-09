import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInout";
import TextEditor from "./TextEditor";

const PostJob=()=> {
    const select = fields;
    return (<div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5 flex items-start">Post a Job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput  {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput  {...select[2]} />
                <SelectInput {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput  {...select[4]} />
                <SelectInput {...select[5]} />
            </div>
            <TagsInput className="text-start" withAsterisk label="Skills" placeholder="Enter Skill" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur/>
            <div className="[&_button[data-active='true']]:!text-cloud-burst-50 [&_button[data-active='true']]:!bg-cloud-burst-950/80">
                <div className="text-sm font-medium text-start">Job Description</div>
                <TextEditor />
            </div>
            <div className="flex gap-4">
                <Button color="cloud-burst.9" variant="light">Publish Job</Button>
                <Button color="cloud-burst.9" variant="outline">Save as Draft</Button>
            </div>
        </div>
    </div>
    )
}

export default PostJob; 