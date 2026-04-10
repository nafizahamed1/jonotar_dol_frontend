const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section className="bg-secondary text-white py-24">
        <div className="container text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Building a Stronger & Transparent Future
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            A modern political platform for citizens, leaders & change makers.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-primary px-6 py-2 rounded font-semibold">
              Latest News
            </button>
            <button className="bg-white text-secondary px-6 py-2 rounded font-semibold">
              Join Movement
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="container grid grid-cols-1 md:grid-cols-3 gap-6 py-16">

        <div className="bg-white shadow-lg p-6 rounded text-center">
          <h2 className="text-3xl font-bold text-primary">10K+</h2>
          <p>Supporters</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded text-center">
          <h2 className="text-3xl font-bold text-primary">150+</h2>
          <p>Events</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded text-center">
          <h2 className="text-3xl font-bold text-primary">25+</h2>
          <p>Leaders</p>
        </div>

      </section>

    </div>
  );
};

export default Home;