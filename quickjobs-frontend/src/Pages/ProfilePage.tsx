import { Divider } from "@mantine/core";
import Profile from "../TalentProfile/Profile";

const ProfilePage=()=> {
    return <div className="min-h-[90vh] bg-cloud-burst-50 font-['poppins']">
        <Divider mx="md" mb="xl" />
        <Profile />

    </div>
}

export default ProfilePage;