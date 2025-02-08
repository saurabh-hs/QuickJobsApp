import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage=()=> {
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins'] p-4">
        <Divider size="xs"/>
        <Link className="my-4 inline-block flex flex-start" to="/find-talent">
            <Button leftSection={<IconArrowLeft size={20} />} color="cloud-burst.9" variant="light">Back</Button>
        </Link>
        <div className="flex gap-5">
            <Profile {...profile} />
            <RecommendTalent />
        </div>

    </div>
    )
};

export default TalentProfilePage;