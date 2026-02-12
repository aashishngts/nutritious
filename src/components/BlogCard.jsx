import { useNavigate } from "react-router-dom";
import { API_URL } from "../context/baseApi";
import DOMPurify from "dompurify";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/blog", { state: { data: blog } });
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder-image.jpg";
    return imagePath.startsWith("http")
      ? imagePath
      : `${API_URL}${imagePath}`;
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#86b817]/20 flex flex-col h-full">
  
  {/* Image */}
  <div className="relative h-56 overflow-hidden">
    <img
      src={getImageUrl(blog.image)}
      alt={blog.title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

    {/* Floating category badge */}
    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-[#138f44] rounded-full shadow">
      {blog.category}
    </span>
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col flex-grow">
    
    {/* Title */}
    <h3 className="text-lg font-bold text-gray-900 leading-6 mb-3 line-clamp-2 group-hover:text-[#138f44] transition-colors duration-300">
      {blog.title}
    </h3>

    {/* Description */}
    <p
      className="text-gray-600 text-sm leading-6 mb-6 line-clamp-3"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(blog.description),
      }}
    />

    {/* Spacer pushes footer down */}
    <div className="mt-auto flex items-center justify-between text-gray-500 text-sm pt-4 border-t border-gray-100">
      <span>{blog.date}</span>

      <button
        onClick={handleClick}
        className="text-[#138f44] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
      >
        Read More
        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  </div>
</div>

  );
};

export default BlogCard;
