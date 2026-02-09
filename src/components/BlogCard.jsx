import { useNavigate } from "react-router-dom";
import { API_URL } from "../context/baseApi";
import DOMPurify from "dompurify";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/blog", { state: { data: blog } });
  };

  // Optimized image URL helper
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder-image.jpg";

    return imagePath.startsWith("http")
      ? imagePath
      : `${API_URL}${imagePath}`;
  };

  return (
    <div className="bg-[#f7f7f7] overflow-hidden rounded-xl">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={getImageUrl(blog.image)}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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

        <p
          className="text-[#777] text-[15px] leading-7 mb-6 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.description),
          }}
        />

        <div className="flex items-center justify-between text-[#777] text-[13px]">
          <span>{blog.date}</span>
          <button
            onClick={handleClick}
            className="text-[#86b817] uppercase font-semibold underline underline-offset-4 tracking-[2px] cursor-pointer hover:text-[#75a015] transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
