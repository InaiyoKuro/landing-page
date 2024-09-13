import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Home() {
  const [currentIndex,setCurrentIndex] = useState(0)
  const [isAutoSliding,setIsAutoSliding] = useState(false)
  const [isDisabled,setIsDisabled] = useState(false)

  const data = [
    {
      title: "Công Nghệ Hiện Đại",
      content1: "Tối ưu hóa hệ thống",
      content2: "chạy trên mọi thiết bị",
      image: "/images/hero_19_2.png"
    },
    {
      title: "Khách Hàng Mong Đợi",
      content1: "Cùng đồng hành",
      content2: "cùng bạn phát triển",
      image: "/images/hero_19_1.png"
    },
    {
      title: "Mạnh Mẽ & Vượt Trội",
      content1: "Nâng cao hiệu quả",
      content2: "hội chẩn chính xác",
      image: "/images/hero_19_3.png"
    }
  ]

  
  useEffect(() => {
    let intervalId;
    if (isAutoSliding) {
      intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [isAutoSliding]);


  const handleLeft = () => {
    if(isDisabled) return
    setIsDisabled(true); 
    setCurrentIndex(prevIndex => (prevIndex - 1 + data.length) % data.length);
    resetAutoSlider()
  }
  const handleRight = () => {
    if(isDisabled) return
    setIsDisabled(true); 
    setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    resetAutoSlider()
  }

  const resetAutoSlider = () => {
    setTimeout(() => {
      setIsDisabled(false);
      setIsAutoSliding(false)
    }, 1500); 
  }

  return (
    <section className="bg-[url('/images/hero_overlay_1.jpg')] relative top-0 bg-cover w-full bg-no-repeat bg-center min-h-lvh">
      <div className="bg-[url('/images/hero_overlay_19.png')] absolute bg-cover w-full bg-no-repeat bg-center min-h-lvh flex justify-center">
        <div className='flex container gap-24'>
          <div className='text-white gap-5 flex flex-col self-center select-none flex-grow'>
            <div className={`flex gap-2 ${isDisabled ? "animate-fadeup05" : ""}`}>
              <img src="/images/circle_shape.svg" alt="" />
              <span className='block text-xl'>{data[currentIndex]?.title}</span>
            </div>
            <h1 className={`text-7xl font-bold leading-tight ${isDisabled ? "animate-fadeup1" : ""}`}>{data[currentIndex]?.content1}<p>{data[currentIndex]?.content2}</p></h1>
            <div className={`mt-8 flex gap-5 ${isDisabled ? "animate-fadeup15" : ""}`}>
              <button className='cursor-pointer bg-blue-600 py-3 px-10 rounded-full outline-none'>Xem Thêm</button>
              <button className='cursor-pointer border-white border-2 py-3 px-10 rounded-full outline-none'>Liên Hệ Ngay</button>
            </div>
          </div>
          <div className={`flex min-w-[597px] self-end my-10 gap-10 pointer-events-none select-none ${isDisabled ? "animate-fadeup1" : ""}`}>
            <img src={data[currentIndex]?.image} alt="" className='object-contain' />
          </div>
            <div className={`flex justify-center flex-col gap-1.5`}>
              <button onClick={handleLeft} className='text-blue-600 p-4 outline-none bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all ease-in duration-200 cursor-pointer'>
                <BsArrowLeft size={"20px"} />
              </button>
              <button onClick={handleRight} className='text-blue-600 p-4 outline-none bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all ease-in duration-200 cursor-pointer'>
                <BsArrowRight size={"20px"} />
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home