import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const CompanyPage=()=> {
    const navigate=useNavigate();
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
        <div className="flex items-start">
        <Button my="md" onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20} />} color="cloud-burst.9" variant="light">Back</Button>
        </div>
            
        <div className="flex gap-5">
           
        </div>

    </div>
    )
}
export default CompanyPage;