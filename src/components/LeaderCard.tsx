import type { Leader } from "../types/leader";

const LeaderCard = ({ leader }: { leader: Leader }) => {
  return (
    <div
      className="group h-full flex flex-col
      bg-white/10 backdrop-blur-xl border border-white/10
      rounded-3xl p-5 sm:p-6 text-center overflow-hidden
      shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
      hover:-translate-y-1 transition-all duration-300"
    >

      <div className="relative w-fit mx-auto">

        <img
          src={leader.image}
          alt={leader.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full
          border-4 border-green-500 object-cover
          group-hover:scale-105 transition-all duration-500"
        />

        <div
          className="absolute inset-0 rounded-full
          shadow-[0_0_30px_rgba(34,197,94,0.35)]"
        ></div>

      </div>

      <h2
        className="mt-5 text-lg sm:text-2xl font-bold text-white
        leading-tight min-h-[60px] flex items-center justify-center"
      >
        {leader.name}
      </h2>

      <p className="text-green-400 text-sm sm:text-base mt-2 font-medium min-h-[45px]">
        {leader.position}
      </p>

      {leader.bio && (
        <p
          className="text-gray-300 text-xs sm:text-sm mt-4
          leading-relaxed line-clamp-3 flex-grow"
        >
          {leader.bio}
        </p>
      )}

      <div className="flex justify-center gap-3 mt-5">

        {leader.facebook && (
          <a
            href={leader.facebook}
            target="_blank"
            className="w-9 h-9 rounded-full bg-blue-600/20
            border border-blue-500/20 flex items-center justify-center
            hover:scale-110 transition"
          >
            f
          </a>
        )}

        {leader.twitter && (
          <a
            href={leader.twitter}
            target="_blank"
            className="w-9 h-9 rounded-full bg-sky-500/20
            border border-sky-400/20 flex items-center justify-center
            hover:scale-110 transition"
          >
            x
          </a>
        )}

        {leader.linkedin && (
          <a
            href={leader.linkedin}
            target="_blank"
            className="w-9 h-9 rounded-full bg-blue-500/20
            border border-blue-400/20 flex items-center justify-center
            hover:scale-110 transition"
          >
            in
          </a>
        )}

      </div>

    </div>
  );
};

export default LeaderCard;