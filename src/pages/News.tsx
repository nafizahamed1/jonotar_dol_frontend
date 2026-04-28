import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import SectionTitle from "../components/SectionTitle";
import type { News } from "../types/news";

const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"latest" | "previous">("latest");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();

        const sortedNews = [...data].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );

        setNews(sortedNews);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const latestNews = news.slice(0, 6);
  const previousNews = news.slice(6);

  const displayedNews =
    activeTab === "latest" ? latestNews : previousNews;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#052e16] to-black text-white py-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle title="News" />

        {/* Tabs */}
        <div className="flex justify-center sm:justify-start gap-3 mb-8">

          <button
            onClick={() => setActiveTab("latest")}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300
            ${
              activeTab === "latest"
                ? "bg-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                : "bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20"
            }`}
          >
            Latest News
          </button>

          <button
            onClick={() => setActiveTab("previous")}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300
            ${
              activeTab === "previous"
                ? "bg-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                : "bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20"
            }`}
          >
            Previous News
          </button>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : displayedNews.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold text-gray-300">
              No News Available
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              News will appear here after publishing
            </p>

          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">

            {displayedNews.map((item) => (
              <div
                key={item._id}
                className="hover:scale-[1.02] transition-all duration-300"
              >
                <NewsCard news={item} />
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default NewsPage;