import VideoSlider from "../components/VideoSlider";

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 sm:py-20">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
           জনতার দল 
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
            ন্যায় ও ইনসাফের প্রতিশ্রুতি ইনসাফ জিন্দাবাদ 
          </p>

          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button className="w-full sm:w-auto bg-primary px-6 py-3 rounded-lg font-semibold text-sm sm:text-base">
              Latest News
            </button>
            <button className="w-full sm:w-auto bg-white text-secondary px-6 py-3 rounded-lg font-semibold text-sm sm:text-base">
              Join Movement
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SLIDER */}
     <section>
  <VideoSlider />
</section>
      {/* STATS SECTION */}
      <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">

        <div className="bg-green-100 shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">10K+</h2>
          <p className="text-sm sm:text-base">Supporters</p>
        </div>

        <div className="bg-green-100 shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">150+</h2>
          <p className="text-sm sm:text-base">Events</p>
        </div>

        <div className="bg-green-100 shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">25+</h2>
          <p className="text-sm sm:text-base">Leaders</p>
        </div>

      </section>

    </div>
  );
};

export default Home;