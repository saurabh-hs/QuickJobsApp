import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../Slices/FilterSlice";


const Talents = () => {
    const dispatch=useDispatch();
    const [talents, setTalents]=useState<any>([]);
    const filter=useSelector((state:any)=>state.filter);
    const [filteredTalents, setFilteredTalents]=useState<any>([]);
    useEffect(()=>{
        dispatch(resetFilter());
        getAllProfiles().then((res)=>{
            setTalents(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    useEffect(()=>{
        let filterTalent=talents;
        console.log(filter);
        if(filter.name)filterTalent=filterTalent.filter((talent:any)=>talent.name.toLowerCase().includes(filter.name.toLowerCase()));
        if(filter["Job Title"] && filter["Job Title"].length > 0){
            filterTalent=filterTalent.filter((talent:any)=>filter["Job Title"]?.some((title:any)=>talent.jobTitle.toLowerCase().includes(title.toLowerCase())));
        }
        if(filter.Location && filter.Location.length > 0) {
            filterTalent=filterTalent.filter((talent:any)=>filter.Location?.some((location:any)=>talent.location.toLowerCase().includes(location.toLowerCase())));
        }
        if(filter.Skills && filter.Skills.length>0) {
            filterTalent=filterTalent.filter((talent:any)=>filter.Skills?.some((skill:any)=>talent.skills?.some((talentSkill:any)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));
        }
        if(filter.exp && filter.exp.length>0){
            filterTalent=filterTalent.filter((talent:any)=>filter.exp[0]<=talent.totalExp && talent.totalExp<=filter.exp[1]);
        }
        setFilteredTalents(talents);
    }, [filter, talents])
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between mt-5">
                <div className="text-2xl font-semibold text-cloud-burst-900">Talents</div>
                <Sort />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                {filteredTalents.length?filteredTalents.map((talent:any, index:any) => <TalentCard key={index} {...talent} />):<div className="text-xl font-semibold">No Talents Found</div>}
            </div>
        </div>
    );
};

export default Talents;
