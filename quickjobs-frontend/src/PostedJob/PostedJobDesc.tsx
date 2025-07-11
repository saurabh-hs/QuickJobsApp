import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props: any) => {
    const [tab, setTab] = useState("overview");
    const [arr, setArr] = useState<any>([]);
    const handleTabChange = (value: any) => {
        setTab(value);
        if (value == "applicants") {
            setArr(props.applicant?.filter((x: any) => x.applicationStatus == "APPLIED"));
        } else if (value == "invited") {
            setArr(props.applicant?.filter((x: any) => x.applicationStatus == "INTERVIEWING"));
        } else if (value == "offered") {
            setArr(props.applicant?.filter((x: any) => x.applicationStatus == "OFFERED"));
        } else if (value == "rejected") {
            setArr(props.applicant?.filter((x: any) => x.applicationStatus == "REJECTED"));
        }
    }

    useEffect(() => {
        handleTabChange("overview")
    }, [props])
    return <div className="mt-5 w-3/4 px-5">
        {props.jobTitle ? <><div className="text-2xl font-semibold flex items-center text-cloud-burst-900">{props.jobTitle} <Badge variant="light" ml="sm" color="cloud-burst.6" size="sm">{props.jobStatus}</Badge></div>
            <div className="font-medium text-cloud-burst-600 mb-5 flex items-left">{props.location}</div>
            <div>
                <Tabs value={tab} onChange={handleTabChange} variant="outline" radius="lg">
                    <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-cloud-burst-600 [&_button[data-active='false']]:text-cloud-burst-900">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview">
                        <JobDesc {...props} edit={true} closed={props.jobStatus == "CLOSED"} />
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                            {
                                arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} posted={true} />) : <div className="text-2xl font-semibold">No Applicants</div>
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                            {
                                arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} invited={true} />) : <div className="text-2xl font-semibold">No Invited Candidates</div>
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                            {arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} offered />):<div className="text-2xl font-semibold">No Offered Candidates</div>
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="rejected">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                            {arr?.length ? arr.map((talent: any, index: any) => <TalentCard key={index} {...talent} offered />):<div className="text-2xl font-semibold">No Rejected Candidates</div>
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </> : <div className="text-2xl font-semibold flex min-h-[70vh] justify-center items-center">No Job Selected</div>}
    </div>
}

export default PostedJobDesc;