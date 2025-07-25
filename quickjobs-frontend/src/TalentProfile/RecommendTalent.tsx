import { useParams } from "react-router-dom";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent=(props:any)=> {
    const {id} = useParams();
    return <div>
        <div className="text-xl font-semibold mb-5 text-cloud-burst-900">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {
                props?.talents.map((talent:any, index:any) =>index<4 && id!=talent.id && <TalentCard key={index} {...talent} />)
            }
        </div>
    </div>
}

export default RecommendTalent;