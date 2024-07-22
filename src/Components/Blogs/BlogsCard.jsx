import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogsCard = ({ blog }) => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="bg-white xl:w-[90%] relative mt-8 mx-8 my-2 px-2 py-2 min-h-[15rem] xl:min-h-[24rem] 2xl:h-[32rem] rounded-[1rem]" 
      // data-aos="fade-up"
      >

        <a href={`/blog?blogtitle=${encodeURIComponent(blog.title)}&id=${blog.id}`}>
          <img
            src={blog?.titleImg}
            alt={blog?.title}
            className='h-[16rem] xl:l 2xl:h-[24rem] w-full rounded-[1rem] object-cover cursor-pointer' />
        </a>

        <div className="absolute bottom-0 left-0 p-3 w-full h-[8rem] lg:h-[10rem] 2xl:h-[12rem]  bg-white  rounded-b-3xl">

          <h3 className="font-extrabold xl:text-2xl 2xl:text-3xl">
            <a href={`/blog?blogtitle=${encodeURIComponent(blog.title)}&id=${blog.id}`}>
              <span className='cursor-pointer'>{blog?.title}</span>
            </a>
          </h3>

          <p className="font-semibold  text-sm 2xl:text-xl my-2 2xl:mt-8">
            <a href={`/blog?blogtitle=${encodeURIComponent(blog.title)}&id=${blog.id}`}>
              <span className='cursor-pointer'>Read More</span>
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogsCard