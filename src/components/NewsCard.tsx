import type { News } from "../types/news";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {news.image && (
        <img
          src={news.image}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5">
        <h2 className="text-xl font-bold text-dark">
          {news.title}
        </h2>

        <p className="text-gray-600 mt-2 line-clamp-3">
          {news.description}
        </p>

        <button className="mt-4 text-primary font-semibold">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;