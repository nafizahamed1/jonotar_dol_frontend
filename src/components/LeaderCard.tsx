import type { Leader } from "../types/leader";

const LeaderCard = ({ leader }: { leader: Leader }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-5 sm:p-6 text-center transition-transform duration-300 hover:-translate-y-1 border border-gray-100">

      {/* Image */}
      <img
        src={leader.image}
        alt={leader.name}
        className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full border-4 border-primary object-cover"
      />

      {/* Name */}
      <h2 className="mt-4 text-base sm:text-xl font-bold text-dark leading-tight">
        {leader.name}
      </h2>

      {/* Position */}
      <p className="text-xs sm:text-base text-gray-600 mt-1">
        {leader.position}
      </p>

    </div>
  );
};

export default LeaderCard;