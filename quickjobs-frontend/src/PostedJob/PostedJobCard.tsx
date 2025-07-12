import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../Services/Utilities";

const PostedJobCard=(props:any)=> {
    const {id} = useParams();
    return <Link to={`/posted-jobs/${props.id}`} className={`rounded-xl p-2 border-l-2 hover:bg-opacity-80 cursor-pointer border-l-cloud-burst-900 ${props.id==id?"bg-cloud-burst-400 text-black":"bg-cloud-burst-900 text-cloud-burst-200"}`}>
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs font-medium">{props.location}</div>
        <div className="text-xs">{props.jobStatus=="DRAFT"?"Drafted":props.jobStatus=="CLOSED"?"Closed":"Posted"} {timeAgo(props.postTime)}</div>
    </Link>
}

export default PostedJobCard;