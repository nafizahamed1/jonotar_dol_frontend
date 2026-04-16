import { useEffect, useState } from "react";

const videos = [
  "YTmLg_gAonQ",
  "mOYo9xDH6oc",
  "Da1SuRahQjQ",
];

const VideoSlider = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // autoplay (popup open থাকলে বন্ধ)
  useEffect(() => {
    if (open) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div className="container py-12">

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        🎥 Latest Videos
      </h2>

      {/* Thumbnail */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg relative"
      >
        <iframe
          key={videos[index]}
          className="w-full h-full pointer-events-none"
          src={`https://www.youtube.com/embed/${videos[index]}`}
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <span className="text-white text-4xl">▶</span>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* Video */}
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${videos[index]}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

        </div>
      )}
    </div>
  );
};

export default VideoSlider;