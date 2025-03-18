import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard=(props:any)=> {
    return <div>
        <div className='flex justify-between bg-cloud-burst-100 items-center rounded-lg p-2'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-300 rounded-md'>
                    <img className="h-7" src={`../../public/Icons/${props.name}.png`} alt="compay logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='font-semibold text-cloud-burst-800 text-950'>{props.name}</div>
                    <div className='text-xs text-cloud-burst-500'>{props.employees} Employees</div>
                </div>
            </div>
            <ActionIcon color="cloud-burst.8" variant="subtle">
                <IconExternalLink />
            </ActionIcon>
        </div>
    </div>
}

export default CompanyCard;