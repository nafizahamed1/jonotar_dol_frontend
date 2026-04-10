const Events = () => {
  return (
    <div className="container py-10">
      <h1 className="text-3xl sm:text-4xl font-bold">Events</h1>

      <div className="mt-6 space-y-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold">Public Rally</h2>
          <p className="text-sm sm:text-base mt-2">Join our mass gathering for awareness.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold">Community Meeting</h2>
          <p className="text-sm sm:text-base mt-2">Discuss development plans with citizens.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;