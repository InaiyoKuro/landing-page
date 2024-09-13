import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";

function Home() {
  const [currentIndex,setCurrentIndex] = useState(0)

  const data = [
    {
      title: "Công Nghệ Hiện Đại",
      content1: "Tối ưu hóa hệ thống",
      content2: "chạy trên mọi thiết bị",
      image: "/images/hero_19_2.png"
    },
    {
      title: "Khách Hàng Mong Đợi",
      content1: "Chúng tôi có đầy nhiệt huyết",
      content2: "cùng bạn phát triển",
      image: "/images/hero_19_1.png"
    },
    {
      title: "Mạnh Mẽ & Vượt Trội",
      content1: "Giúp tăng tính hiệu quả",
      content2: "hội chẩn chính xác",
      image: "/images/hero_19_3.png"
    }
  ]
  console.log(data)

  return (
    <section className="bg-[url('/images/hero_overlay_1.jpg')] relative top-0 bg-cover w-full bg-no-repeat bg-center min-h-lvh">
      <div className="bg-[url('/images/hero_overlay_19.png')] absolute bg-cover w-full bg-no-repeat bg-center min-h-lvh flex justify-center">
        <div className='flex container gap-28'>
          <div className='text-white gap-5 flex flex-col self-center'>
            <div className='flex gap-2 '>
              <img src="/images/circle_shape.svg" alt="" />
              <span className='block text-xl'>{data[currentIndex].title}</span>
            </div>
            <h1 className='text-7xl font-bold leading-tight'>{data[currentIndex].content1}<p>{data[currentIndex].content2}</p></h1>
            <div className='mt-8 flex gap-5'>
              <button className='cursor-pointer bg-blue-600 py-3 px-10 rounded-full outline-none'>Xem Thêm</button>
              <button className='cursor-pointer border-white border-2 py-3 px-10 rounded-full outline-none'>Liên Hệ Ngay</button>
            </div>
          </div>
          <div className='flex min-w-[597px] self-end my-10 gap-10'>
            <img src={data[currentIndex].image} alt="" className='object-contain' />
            <div className='flex justify-center flex-col'>
              <BsArrowLeft size={"18px"} className='text-blue-600 p-5 bg-white rounded-full' />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home