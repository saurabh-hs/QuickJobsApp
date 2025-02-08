import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";

const FindTalentPage=()=> {
    return( <div className="min-h-[90vh] bg-cloud-burst-50 font-['Poppins']">
        <SearchBar />
        <Divider size="xs" mx="md"/>
        <Talents />

    </div>
    )
};

export default FindTalentPage;