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
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Leaders</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leaders.map((leader) => (
          <LeaderCard key={leader._id} leader={leader} />
        ))}
      </div>
    </div>
  );
};

export default Leaders;