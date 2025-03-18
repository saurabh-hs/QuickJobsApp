import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage=()=> {
    return <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] px-4">
        <Divider size="xs" />
        <div className="flex gap-5">
            <PostedJob />
            <PostedJobDesc />
        </div>
    </div>

}

export default PostedJobPage;