import { CgSearch } from "react-icons/cg"; 
import React, { useState } from 'react'
import BlogNews from '../components/blog/blogNews'
import PageBanner from '../components/Utilities/PageBanner'
import Feature from '../components/Utilities/Feature'
import RecentPost from "../components/blog/RecentPost";
import ReactPaginate from "react-paginate";



const Blog = () => {

    
  return (
    <>
    <PageBanner/>
    <div className='container flex gap-6 Wood py-20'>
        <div className=' flex flex-col gap-14'>
            <BlogNews img={"public/blog1.png"} tag="Wood" title={"Going all-in with millennial design"} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."/>
            <BlogNews img={"public/blog2.png"} tag="Handmade" title={"Exploring new ways of decorating"} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."/>
            <BlogNews img={"public/blog3.png"} tag="Wood" title={"Handmade pieces that took time to make"} para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."/>
        </div>
        <div className="px-10">
            <div className='w-[300px] h-[50px] flex justify-between items-center border-1 rounded-lg'>
                <input type="text" name="" id="" className="py-3 px-3 w-[300px] outline-0" />
                <p><CgSearch size={24} className="mr-3"/></p>
            </div>
            <div className="font-Poppins font-normal flex flex-col gap-10 text-base text-secondary px-6 py-10">
                <h3 className="font-medium  text-[24px] text-black">Categories</h3>
                <p className="flex justify-between">Crafts <span>2</span></p>
                <p className="flex justify-between">Design <span>8</span></p>
                <p className="flex justify-between">Handmade <span>7</span></p>
                <p className="flex justify-between">Interior <span>1</span></p>
                <p className="flex justify-between">Wood <span>6</span></p>
            </div>

            <div className="pt-10 px-6 ">
                <h2 className="pb-7 font-Poppins font-medium text-2xl text-black">Recent Posts</h2>
                <div className="flex flex-col gap-9">
                    <RecentPost img={"/blogsmall1.png"} title={"Going all-in with millennial design"} date={"03 Aug 2022"}/>
                    <RecentPost img={"/blogsmall2.png"} title={"Exploring new ways of decorating"} date={"03 Aug 2022"}/>
                    <RecentPost img={"/blogsmall3.png"} title={"Handmade pieces that took time to make"} date={"03 Aug 2022"}/>
                    <RecentPost img={"/blogsmall4.png"} title={"Modern home in Milan"} date={"03 Aug 2022"}/>
                    <RecentPost img={"/blogsmall5.png"} title={"Colorful office redesign"} date={"03 Aug 2022"}/>
                </div>
            </div>

        </div>
    </div>
    <Feature/>
    </>
  )
}

export default Blog