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
    <div className="container">

      <SectionTitle title="Latest News" />

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item._id} news={item} />
        ))}
      </div>

    </div>
  );
};

export default NewsPage;