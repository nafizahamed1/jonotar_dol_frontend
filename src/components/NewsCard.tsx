import type { News } from "../types/news";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover"
        />
      )}

      <div className="p-5">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-dark">
          {news.title}
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-3">
          {news.description}
        </p>

        <button className="mt-4 w-full sm:w-auto text-primary font-semibold text-sm sm:text-base">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;