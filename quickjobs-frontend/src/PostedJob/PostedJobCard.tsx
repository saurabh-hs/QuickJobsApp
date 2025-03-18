const PostedJobCard=(props:any)=> {
    return <div className="bg-cloud-burst-100 rounded-xl p-2 border-l-2 border-l-cloud-burst-900">
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs text-cloud-burst-500 font-medium">{props.location}</div>
        <div className="text-xs text-cloud-burst-500">{props.posted}</div>
    </div>
}

export default PostedJobCard;