import { Badge } from "@mantine/core";

const PostedJobDesc=()=> {
    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center text-cloud-burst-900">Software Engineer <Badge variant="light" ml="sm" color="cloud-burst.6" size="sm">Badge</Badge></div>
        <div  className="font-medium text-cloud-burst-600 mb-5 flex items-left">New York, United States</div>

    </div>
}

export default PostedJobDesc;