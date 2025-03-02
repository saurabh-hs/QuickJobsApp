import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";


const CompanyEmployees=()=>{
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
            {talents.map((talent, index) => 
                index < 6 && (
                    <div key={index} className="p-2">
                        <TalentCard {...talent} />
                    </div>
                )
            )}
        </div>
    );
}

export default CompanyEmployees;