import LeaderCard from "../components/LeaderCard";
import leader1 from "../assets/leaders/leader1.jpg";
import leader2 from "../assets/leaders/leader2.jpg";
import leader3 from "../assets/leaders/leader3.jpg";

const Leaders = () => {
  const leaders = [
    {
      _id: "1",
      name: "বিগ্রেডিয়ার জেনারেল (অবঃ) মোঃ শামীম কামাল",
      position: "চেয়ারম্যান, জনতার দল",
      image: leader1,
    },
    {
      _id: "2",
      name: "ডেল এইচ খান",
      position: "প্রধান সমন্বয়ক ও মুখপাত্র, জনতার দল",
      image: leader2,
    },
    {
      _id: "3",
      name: "আজম খান",
      position: "মহাসচিব, জনতার দল",
      image: leader3,
    },
  ];

  return (
    <div className="container py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Our Leaders
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader) => (
          <LeaderCard key={leader._id} leader={leader} />
        ))}
      </div>
    </div>
  );
};

export default Leaders;