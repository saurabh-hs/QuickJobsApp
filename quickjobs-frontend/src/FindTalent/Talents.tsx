import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";


const Talents = () => {
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between mt-5">
                <div className="text-2xl font-semibold text-cloud-burst-900">Talents</div>
                <Sort />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                {talents.map((talent, index) => <TalentCard key={index} {...talent} />)}
            </div>
        </div>
    );
};

export default Talents;
