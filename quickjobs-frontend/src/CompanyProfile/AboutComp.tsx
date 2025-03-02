import { companyData } from "../Data/Company";

const AboutComp=()=> {
    const company:{[key:string]:any}=companyData;
    return <div className="flex flex-col gap-5 text-left">
        {
            Object.keys(company).map((key, index)=> key!='Name' &&<div key={index}>
                <div className="text-xl mb-3 font-semibold text-cloud-burst-900">{key}</div>
                {key!="Website" &&<div className="text-sm text-cloud-burst-700 text-justify">{key!="Specialties"?company[key]:company[key].map((item:string, index:number)=><span key={index}> &bull; {item}</span>)}</div>}
                {key=="Website" &&<a href={company[key]} target="_blank" className="text-sm text-cloud-burst-500 text-justify">{company[key]}</a>}
                </div>)
        }
    </div>
}

export default AboutComp;