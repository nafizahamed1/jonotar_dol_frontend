import { useEffect, useState } from "react";
import { getLeaders } from "../services/api";
import type { Leader } from "../types/leader";
import LeaderCard from "../components/LeaderCard";

const Leaders = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    getLeaders().then(setLeaders);
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Our Leaders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader) => (
          <LeaderCard key={leader._id} leader={leader} />
        ))}
      </div>
    </div>
  );
};

export default Leaders;