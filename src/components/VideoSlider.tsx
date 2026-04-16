import { useEffect, useState } from "react";

const videos = [
  "YTmLg_gAonQ",
  "mOYo9xDH6oc",
  "Da1SuRahQjQ",
];
const VideoSlider = () => {
  const [index, setIndex] = useState(0);

  // autoplay every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        Latest Videos
      </h2>

      {/* VIDEO */}
      <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videos[index]}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;