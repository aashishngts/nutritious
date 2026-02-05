import React from "react";
import 'animate.css';
import { useLocation } from "react-router-dom";

function BlogDetail() {
    const location = useLocation();
    const { data } = location.state || {};
    return (
        <>
            <div className="mt-20">
                <div className="w-[90%] h-[600px] mx-auto overflow-hidden relative animate-fadeup animate_animated animate_fadeInUpBig">
                    <img
                        src={data.image}
                        alt={data.title}
                        className=" w-full h-full object-cover object-top  rounded-2xl "
                    />
                    <div className="absolute left-14 bottom-10 right-56 z-40">
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
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent."></div>
                </div>

                <div className="mx-auto justify-center w-[60%] mt-12">
                    <div className="text-3xl my-3 font-semibold ">{data.title}</div>
                    <p className="whitespace-pre-wrap">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae turpis nec sapien iaculiseu dolor.
                            Phasellus vitae consequat erat. Nulla tempus rutrum sollicitudin. Nunc bibendum, ex at molestie ullamcorper,
                            nulla sem fringilla eros, eget dictum nisi nunc eu orci. Morbi dui erat, porttitor at sapien velit vel,
                            lobortis vestibulum erat. Vivamus faucibus iaculis eu tristique elit vehicula.
                        </p>

                        <p>Creates emotional connections – Stories evoke emotions, making your brand more relatable.</p>
                        <p>Enhances brand recall – People remember stories better than facts and statistics.</p>
                        <p>Drives engagement & shares – Compelling stories encourage likes, shares, and interactions.</p>
                        <p>Builds trust & loyalty – A well-told story humanizes your brand and builds long-term relationships.</p>

                    </p>
                </div>
            </div>
        </>
    );
}

export default BlogDetail;