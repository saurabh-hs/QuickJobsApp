import { formatDate } from "../Services/Utilities";

const ExpCard=(props:any)=> {
    return <div className="flex flex-col gap-2">
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={`../../public/Icons/${props.company}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col">
                    <div className='text-cloud-burst-900 text-950 font-semibold flex flex-start'>{props.title}</div>
                    <div className='text-sm text-cloud-burst-900'>{props.company} &bull; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-cloud-burst-900">
                {formatDate(props.startDate)} - {formatDate(props.endDate)}
            </div>
        </div>
        <div className="text-sm text-cloud-burst-900 text-justify">
            {props.description}
        </div>

    </div>
}

export default ExpCard;