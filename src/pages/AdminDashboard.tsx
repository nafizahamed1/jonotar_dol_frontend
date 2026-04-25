import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg font-semibold text-white 
            bg-gradient-to-r from-red-600 to-red-800
            shadow-[0_0_20px_rgba(239,68,68,0.6)]
            hover:shadow-[0_0_30px_rgba(239,68,68,0.9)]
            hover:scale-105 active:scale-95 
            transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
                    <div
            onClick={() => navigate("/admin/news")}
            className="p-6 rounded-2xl 
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_30px_rgba(0,0,0,0.6)]
            hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]
            transition-all duration-300 cursor-pointer"
            >
            <h2 className="text-lg font-semibold text-white mb-2">
                Manage News
            </h2>
            <p className="text-gray-300 text-sm">
                Add / Edit / Delete news
            </p>
            </div>

          {/* Card 2 */}
        <div
            onClick={() => navigate("/admin/leaders")}
            className="p-6 rounded-2xl
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_30px_rgba(0,0,0,0.6)]
            hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
            transition-all duration-300 cursor-pointer"
            >
            <h2 className="text-lg font-semibold text-white mb-2">
                Manage Leaders
            </h2>
            <p className="text-gray-300 text-sm">
                Update leaders info
            </p>
        </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl 
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_30px_rgba(0,0,0,0.6)]
            hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)]
            transition-all duration-300 cursor-pointer">

            <h2 className="text-lg font-semibold text-white mb-2">
              Manage Events
            </h2>
            <p className="text-gray-300 text-sm">
              Create / Edit events
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;