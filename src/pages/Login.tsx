import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("admin", "true");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-50 px-5 py-2.5 rounded-xl
        text-white font-medium
        bg-gradient-to-r from-green-600 to-red-600
        shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]
        hover:scale-105 active:scale-95
        transition-all duration-300"
      >
        ← Back
      </button>

      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-red-700 via-black to-green-800 opacity-90"></div>

      <div className="absolute w-[500px] h-[500px] bg-red-600 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-600 rounded-full blur-3xl opacity-30 bottom-[-100px] right-[-100px]"></div>

      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl
        bg-white/10 backdrop-blur-2xl border border-white/20
        shadow-[0_0_40px_rgba(0,0,0,0.8)]">

        <h1 className="text-3xl font-extrabold text-center text-white mb-2 tracking-wide">
          Admin Panel
        </h1>

        <p className="text-center text-gray-300 text-sm mb-6">
          Secure Access Portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300
            border border-white/20 focus:border-green-400
            focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300
            border border-white/20 focus:border-red-400
            focus:ring-2 focus:ring-red-400 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-red-600 via-red-700 to-green-600
            hover:scale-105 transition-all duration-300"
          >
            Login Now
          </button>

        </form>

        <div className="mt-6 text-center text-gray-400 text-xs">
          © জনতার দল Admin System
        </div>

      </div>
    </div>
  );
};

export default Login;