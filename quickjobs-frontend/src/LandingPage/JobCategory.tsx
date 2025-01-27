const JobCategory=()=>{
    return (
        <div className="mt-20">
            <div className="text-4xl text-cloud-burst-950 [&>span]:text-cloud-burst-600 font-semibold mb-3">Browse <span>Job</span> Category</div>
            <div className="text-lg mx-auto text-cloud-burst-500 text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <div className="flex flex-col items-center w-64 mt-5">
                <div className="p-2 bg-cloud-burst-500 rounded-full">
                    <img className="h-8 w-8" src="../../../public/Category/Digital Marketing.png" alt="" />
                </div>
                <div className="text-cloud-burst-900 text-xl font-semibold">Digital Marketing</div>
                <div className="text-sm text-center text-cloud-burst-500">Promote brands online with marketing strategies</div>
                <div className="text-cloud-burst-900 text-lg">1k+ new job posted</div>
            </div>
        </div>
    );
}
export default JobCategory;