import React from 'react'

function Home() {
  return (
    <section className="bg-[url('/images/hero_overlay_1.jpg')] relative top-0 bg-cover w-full bg-no-repeat bg-center min-h-lvh">
      <div className="bg-[url('/images/hero_overlay_19.png')] absolute bg-cover w-full bg-no-repeat bg-center min-h-lvh flex justify-center">
        <div className='flex container gap-28'>
          <div className='text-white gap-5 flex flex-col self-center'>
            <div className='flex gap-2 '>
              <img src="/images/circle_shape.svg" alt="" />
              <span className='block text-xl'>Công Nghệ Hiện Đại</span>
            </div>
            <h1 className='text-7xl font-bold leading-tight'>Tối ưu hệ thống chạy trên mọi thiết bị</h1>
            <div className='mt-8 flex gap-5'>
              <button className='cursor-pointer bg-blue-600 py-3 px-10 rounded-full outline-none'>Xem Thêm</button>
              <button className='cursor-pointer border-white border-2 py-3 px-10 rounded-full outline-none'>Liên Hệ Ngay</button>
            </div>
          </div>
          <div className='flex min-w-[597px] flex self-end my-10'>
            <img src="/images/hero_19_2.png" alt="" className='object-contain' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home