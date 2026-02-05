import { useNavigate } from "react-router-dom";



const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  function handleClick({ data }) {
      window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

    navigate("/blog", {
      state: { data }
    })

  }

  return (
    <div className="bg-[#f7f7f7] overflow-hidden rounded-xl">
      {/* Image */}
      <div className="h-56 overflow-hidden ">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover  transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-[#86b817] uppercase tracking-[2px] text-[12px] font-semibold mb-2">
          {blog.category}
        </p>

        <h3 className="text-[22px] font-bold text-[#222] leading-8 mb-3">
          {blog.title}
        </h3>

        <p className="text-[#777] text-[15px] leading-7 mb-6">
          {blog.description}
        </p>

        <div className="flex items-center justify-between text-[#777] text-[13px]">
          <span>{blog.date}</span>
          <button onClick={() => handleClick({ data: blog })} className="text-[#86b817] uppercase font-semibold underline underline-offset-4 tracking-[2px] cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
