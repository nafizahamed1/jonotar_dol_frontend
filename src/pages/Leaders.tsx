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
      bio: "",
    },
    {
      _id: "2",
      name: "ডেল এইচ খান",
      position: "প্রধান সমন্বয়ক ও মুখপাত্র, জনতার দল",
      image: leader2,
      bio: "",
    },
    {
      _id: "3",
      name: "আজম খান",
      position: "মহাসচিব, জনতার দল",
      image: leader3,
      bio: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#052e16] to-black text-white py-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Our Leaders
          </h1>

          

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">

          {leaders.map((leader) => (
            <div
              key={leader._id}
              className="hover:scale-[1.02] transition-all duration-300"
            >
              <LeaderCard leader={leader} />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Leaders;