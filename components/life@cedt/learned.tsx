'use client'
import Image from "next/image"
import intensiveCourseImg from '@/public/life@cedt/intensivecourse.jpeg';
import fridayActImg from '@/public/life@cedt/fridayact.jpeg';
import internImg from '@/public/life@cedt/intern.jpeg';

export function IntensiveCourses(){
    return (
    <div className="bg-white rounded-lg w-[60%] h-[200px] relative flex flex-row shadow-lg mb-14">
        <div className="h-full w-[40%] relative rounded-lg">
        <Image src={intensiveCourseImg} alt='coursesImg' fill={true} className="object-cover rounded-l-lg"/>
        </div>
        <div className="text-lg m-2 relative top-1 mr-5 flex-1">
                                    <div className="font-bold mb-4">Intensive courses</div>
                                    <div className="font-medium">Courses that promote self-discovery </div>
                                    <div className="font-medium">also provide opportunities for us to </div>
                                    <div className="font-medium">apply course knowledge in practical</div>
                                    <div className="font-medium">projects.</div>
        </div>
    </div>
    )
}

export function FridayActivities(){
    return(
    <div className="bg-white rounded-lg w-[60%] h-[200px] relative flex flex-row shadow-lg mb-14">
        <div className="text-lg m-2 relative top-1 mr-5 flex-1">
                                    <div className="font-bold mb-4">Friday Activities</div>
                                    <div className="font-medium">We participate in activities that help</div>
                                    <div className="font-medium">us get to know the company better</div>
                                    <div className="font-medium">and offer workshops on topics of </div>
                                    <div className="font-medium">interest.</div>
        </div>
            <div className="h-full w-[40%] relative rounded-lg right-0">
            <Image src={fridayActImg} alt='coursesImg' fill={true} className="object-cover rounded-r-lg"/>
            </div>
    </div>
    )
}

export function Internship(){
    return (
    <div className="bg-white rounded-lg w-[60%] h-[200px] relative flex flex-row shadow-lg">
        <div className="h-full w-[40%] relative rounded-lg">
        <Image src={internImg} alt='coursesImg' fill={true} className="object-cover rounded-l-lg"/>
        </div>
        <div className="text-lg m-2 relative top-1 mr-5 flex-1">
                                    <div className="font-bold mb-4">Internship</div>
                                    <div className="font-medium">During summer, everyone interns</div>
                                    <div className="font-medium">with an MOU company, gaining real-</div>
                                    <div className="font-medium">world preparation and practical</div>
                                    <div className="font-medium">experience.</div>
        </div>
    </div>
    )
}