import { formatDate } from "../Services/Utilities";

const CertCard=(props:any)=> {
    return <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={`../../public/Icons/${props.issuer}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col items-start">
                    <div className='text-cloud-burst-900 text-950 font-semibold'>{props.name}</div>
                    <div className='text-sm text-cloud-burst-900'>{props.issuer}</div>
                </div>
            </div>
            <div className="flex flex-col items-end">
            <div className="text-sm text-cloud-burst-900">
                Issued {formatDate(props.issueDate)}
            </div>
            <div className="text-sm text-cloud-burst-900">ID: {props.certificateId}</div>
            </div>
            
        </div>
}

export default CertCard;