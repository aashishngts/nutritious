import React from "react";
import 'animate.css';
import { useLocation } from "react-router-dom";
import { API_URL } from "../context/baseApi";

function BlogDetail() {
    const location = useLocation();
    const { data } = location.state || {};
    const getImageUrl = (imagePath) => {
    if (!imagePath) return '/placeholder-image.jpg'; // Fallback image

    // If image path already starts with http/https, return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }

    // Otherwise, prepend the base URL
    return `${API_URL}${imagePath}`;
  };
    return (
        <>
            <div className="mt-20">
                <div className="w-[90%] h-[300px] md:h-[600px] mx-auto overflow-hidden relative animate-fadeup animate_animated animate_fadeInUpBig">
                    <img
                        src={getImageUrl(data.image)}
                        alt={data.title}
                        className=" w-full h-full object-cover object-top  rounded-2xl "
                    />
                    <div className="absolute left-14 bottom-10 right-56 z-40 md:block hidden">
                        <div className="flex gap-12">
                            <div className="text-white text-xl border border-gray-900 px-4  rounded-2xl ">
                                {" "}
                                {data.category}
                            </div>

                            <div className="text-white text-xl">{data.date} </div>
                        </div>
                        

                        <div className="text-white text-6xl whitespace-break-spaces my-4 z-30">
                            {data.title}
                        </div>
                    </div>

                     <div className="absolute left-0 bottom-0 right-56 z-50 block md:hidden w-full mb-5">
                        <div className="flex justify-between gap-4">
                            <div className="text-white text-lg border border-gray-900 px-4  rounded-2xl ">

                                {data.category}
                            </div>
                            <div className="text-white text-md">{data.date} </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent."></div>
                </div>

                <div className=" mx-auto flex flex-col justify-center  w-[90%] md:w-[70%] mt-12  ">
                    <div className="text-3xl my-3 font-semibold text-left ">{data.title}</div>
                    <p className="whitespace-pre-wrap items-center">
                        {data.description}

                    </p>
                </div>
            </div>
        </>
    );
}

export default BlogDetail;