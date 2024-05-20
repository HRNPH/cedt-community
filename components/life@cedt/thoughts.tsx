'use client'
import Image from "next/image"
import prameCandid from '@/public/life@cedt/prame.png'
import nowCandid from '@/public/life@cedt/now.png'
import estherCandid from '@/public/life@cedt/esther.png'
import apiCandid from '@/public/life@cedt/api.png'
import quote from '@/public/life@cedt/quote.png'


export function PrameThought(){
return (
    <div className="bg-white border-1 border-[#FACC15] rounded-2xl w-[23%] h-[430px] relative  shadow-lg mx-4">
    <div className="w-auto h-auto mr-3 ml-7 mt-10">
        <Image src={quote} alt='coursesImg' width={30} height={30} />
    </div>

    <div className="text-lg m-2 relative top-1 mr-5">
                                    <div>การเรียน CEDT เป็นเวลา 1 ปี </div>
                                    <div>สามารถเปลี่ยนแปลงความรู้และ </div>
                                    <div >ความเข้าใจเกี่ยวกับคอมพิวเตอร์ </div>
                                    <div>จากคนที่เริ่มจากไม่มีพื้นฐานเลย</div>
                                    <div>ให้กลายเป็นผู้ที่มีความรู้และ</div>
                                    <div>ความเชี่ยวชาญในหลายๆ ด้าน</div>
                                    <div>ได้อย่างน่าทึ่ง</div>
    </div>

    <div className="flex flex-row">
        <div className="mt-10 ml-6 text-sm">
            <div className="font-italic font-thin">Prame,</div>
            <div className="font-italic font-thin">CEDT student</div>
        </div>

        <div className="w-auto h-auto mt-5 ml-12">
            <Image src={prameCandid} alt='coursesImg' width={90} height={90} />
        </div>
    </div>
</div>
)
}

export function NowThought(){
    return (
        <div className="bg-white border-1 border-[#FACC15] rounded-2xl w-[23%] h-[430px] relative  shadow-lg mx-4">
        <div className="w-auto h-auto mr-3 ml-7 mt-10">
            <Image src={quote} alt='coursesImg' width={30} height={30} />
        </div>
    
        <div className="text-lg m-2 relative top-1 mr-5 flex-1">
                                        <div>เป็นหลักสูตรใหม่ที่ให้เราได้ลอง </div>
                                        <div>ทำอะไรใหม่ๆ เนื้อหาที่เรียนได้ใช้</div>
                                        <div >ทำงานจริง ไม่ต้องเรียนเนื้อหา </div>
                                        <div>ฟิสิกส์เคมี ที่ไม่เกี่ยวข้องกับ</div>
                                        <div>คอมพิวเตอร์รูปแบบการเรียนเป็น</div>
                                        <div>Block โฟกัสไปที่ละวิชาได้ฝึกงาน</div>
                                        <div>ทุกปี จบภายใน 3.5 ปี</div>
        </div>
    
        <div className="flex flex-row">
            <div className="mt-10 ml-6 text-sm">
                <div className="font-italic font-thin">Now,</div>
                <div className="font-italic font-thin">CEDT student</div>
            </div>
    
            <div className="w-auto h-auto mt-5 ml-12">
                <Image src={nowCandid} alt='coursesImg' width={90} height={90} />
            </div>
        </div>
    </div>
    )
    }
    
    
export function ApiThought(){
    return (
        <div className="bg-white border-1 border-[#FACC15] rounded-2xl w-[23%] h-[430px] relative  shadow-lg mx-4">
        <div className="w-auto h-auto mr-3 ml-7 mt-10">
            <Image src={quote} alt='coursesImg' width={30} height={30} />
        </div>
        
        <div className="text-lg m-2 relative top-1 mr-5 flex-1">
                                        <div>CEDT เป็นคณะนึงที่ผมรู้สึกว่า </div>
                                        <div>เรียนได้อย่างมีความสุขสุดๆ </div>
                                        <div >ได้เรียนอย่างที่อยากเรียน </div>
                                        <div>ได้ลองแบบที่อย่างลอง เป็น  </div>
                                        <div>sandbox ที่เหมาะสําหรับการ</div>
                                        <div>ลงมือทําอะไรใหม่ ๆ </div>
                                        <div> จริง ๆ ครับ</div>
        </div>
        
        <div className="flex flex-row">
            <div className="mt-10 ml-6 text-sm">
                <div className="font-italic font-thin">Api,</div>
                <div className="font-italic font-thin">CEDT student</div>
            </div>
        
            <div className="w-auto h-auto mt-5 ml-12">
                <Image src={apiCandid} alt='coursesImg' width={90} height={90} />
            </div>
        </div>
    </div>
    )
}
        
        
export function EstherThought(){
    return (
        <div className="bg-white border-1 border-[#FACC15] rounded-2xl w-[23%] h-[430px] relative  shadow-lg mx-4">
        <div className="w-auto h-auto mr-3 ml-7 mt-10">
            <Image src={quote} alt='coursesImg' width={30} height={30} />
        </div>
        
        <div className="text-lg m-2 relative top-1 mr-5 flex-1">
                                        <div>CEDT สอนเพื่อให้นำไปใช้ได้จริง </div>
                                        <div>ตั้งแต่ปี 1 ได้ทำโปรเจคกับเพื่อนๆ  </div>
                                        <div>ช่วยกันเรียน จากวันแรกที่ไม่รู้</div>
                                        <div>อะไรเลยวันนี้ต้องฝึกงานแล้ว </div>
                                        <div>ทำให้เกิดความกระตือรือร้นที่</div>
                                        <div>จะเรียนรู้และทำให้เก่งขึ้นจากวัน</div>
                                        <div>แรกมาก</div>
        </div>
        
        <div className="flex flex-row">
            <div className="mt-10 ml-6 text-sm">
                <div className="font-italic font-thin">Esther,</div>
                <div className="font-italic font-thin">CEDT student</div>
            </div>
        
            <div className="w-auto h-auto mt-5 ml-12">
                <Image src={estherCandid} alt='coursesImg' width={90} height={90} />
            </div>
        </div>
    </div>
    )
}
 