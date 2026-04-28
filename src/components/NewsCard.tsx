import type { News } from "../types/news";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div
      className="group bg-white/10 backdrop-blur-xl border border-white/10
      rounded-2xl overflow-hidden shadow-lg
      hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
      hover:-translate-y-1 transition-all duration-300"
    >

      {news.image && (
        <div className="overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-48 sm:h-56 md:h-60 object-cover
            group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-4 sm:p-5">

        <div className="flex items-center justify-between mb-3">

          <span
            className="px-3 py-1 text-[10px] sm:text-xs rounded-full
            bg-green-500/20 text-green-400 border border-green-500/20"
          >
            Latest Update
          </span>

          <span className="text-[11px] sm:text-xs text-gray-400">
            {new Date(news.createdAt).toLocaleDateString()}
          </span>

        </div>

        <h2
          className="text-lg sm:text-xl md:text-2xl font-bold text-white
          line-clamp-2"
        >
          {news.title}
        </h2>

        <p
          className="text-sm sm:text-base text-gray-300 mt-3
          line-clamp-3"
        >
          {news.description}
        </p>

        <button
          className="mt-5 w-full sm:w-auto px-5 py-2 rounded-full
          text-sm sm:text-base font-medium text-white
          bg-gradient-to-r from-green-600 to-green-700
          hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
          hover:scale-105 active:scale-95
          transition-all duration-300"
        >
          Read More →
        </button>

      </div>
    </div>
  );
};

export default NewsCard;