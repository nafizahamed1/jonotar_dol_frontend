import type { Leader } from "../types/leader";

const LeaderCard = ({ leader }: { leader: Leader }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 transition">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-4 border-primary object-cover"
      />

      <h2 className="mt-4 text-lg sm:text-xl font-bold">{leader.name}</h2>
      <p className="text-sm sm:text-base text-gray-600">{leader.position}</p>
    </div>
  );
};

export default LeaderCard;