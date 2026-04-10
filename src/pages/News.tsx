import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import SectionTitle from "../components/SectionTitle";
import type { News } from "../types/news";

const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNews);
  }, []);

  return (
    <div className="container py-10">

      <SectionTitle title="Latest News" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item._id} news={item} />
        ))}
      </div>

    </div>
  );
};

export default NewsPage;