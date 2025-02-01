import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../Data/Data';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const JobCategory=()=>{
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-cloud-burst-950 [&>span]:text-cloud-burst-600 font-semibold mb-3">Browse <span>Job</span> Category</div>
            <div className="text-lg mb-10 mx-auto text-cloud-burst-500 text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <Carousel slideSize="22%" slideGap="md" loop className='focus-visible:[&_button]:!outline-none [&_button]:!bg-cloud-burst-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100' nextControlIcon={<IconArrowRight className='h-8 w-8' />}
      previousControlIcon={<IconArrowLeft className='h-8 w-8' />}>
                {
                    jobCategory.map((category)=><Carousel.Slide>
                        <div className="flex flex-col mb-10 items-center w-64 mt-5 gap-2 border border-cloud-burst-900 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-7 transition duration-600 ease-in-out !shadow-cloud-burst-100">
                            <div className="p-2 bg-cloud-burst-500 rounded-full">
                                <img className="h-8 w-8" src={`../../public/Category/${category.name}.png`} alt={category.name} />
                            </div>
                            <div className="text-cloud-burst-900 text-xl font-semibold">{category.name}</div>
                            <div className="text-sm text-center text-cloud-burst-500">{category.desc}</div>
                            <div className="text-cloud-burst-900 text-lg">{category.status}</div>
                        </div>
                    </Carousel.Slide> )
                }
            </Carousel>
            
        </div>
    );
}
export default JobCategory;