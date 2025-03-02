import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard=(props:any)=> {
    return <div>
        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
                <div className='p-2 bg-cloud-burst-200 rounded-md'>
                    <img className="h-7" src={'../../Icons/${props.name}.png'} alt="compay logo" />
                </div>
                <div>
                    <div className='text-cloud-burst-50 text-950'>{props.name}</div>
                    <div className='text-xs text-cloud-burst-100'>{props.employees} Employees</div>
                </div>
            </div>
            <ActionIcon color="cloud-burst.8" variant="subtle">
                <IconExternalLink />
            </ActionIcon>
        </div>
    </div>
}

export default CompanyCard;