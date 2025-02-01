import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';

const Subscribe=()=> {
    return <div className="mt-20 flex items-center bg-cloud-burst-200 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-2/5 text-cloud-burst-950 [&>span]:text-cloud-burst-600 font-semibold">Never Wants to Miss Any  <span>Job News</span></div>
        <div className='flex gap-4 bg-cloud-burst-500 px-3 py-2 items-center rounded-xl'>
            <TextInput
                className='[&_input]:text-cloud-burst-50 font-semibold'
                variant="unstyled"
                placeholder="Enter your email address"
                size='xl'
             />
             <Button className='!rounded-lg' size='lg' color='cloud-burst.8' variant="filled">Subscribe</Button>
        </div>
    </div>
}

export default Subscribe;