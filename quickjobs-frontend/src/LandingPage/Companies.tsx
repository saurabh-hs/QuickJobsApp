import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies=()=> {
    return (
        <div className="mt-20">
            <div className="text-4xl text-cloud-burst-950 [&>span]:text-cloud-burst-600 font-semibold mb-10">Trusted By <span>1000+</span> Companies</div>
            <Marquee pauseOnHover={true}>
                {
                    companies.map((company, index)=><div key={index} className="mx-8 px-2 py-1 hover:bg-cloud-burst-200 rounded-xl cursor-pointer">
                        <img className="h-14 " src={`../../public/Logos/${company}.png`} alt={company} />
                    </div>)
                }
            </Marquee>
        </div>
    );
}

export default Companies;