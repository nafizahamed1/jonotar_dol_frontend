import { useEffect, useState } from "react";

export default function MembershipPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
   
    setOpen(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem("membership_seen", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">
            Become a Member
          </h2>

          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-dark transition"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Join our political platform to get updates, news & voting access.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Membership submitted!");
            handleClose();
          }}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          >
            <option value="">Choose Membership Type</option>
            <option value="general">General Member</option>
            <option value="supporter">Supporter</option>
            <option value="volunteer">Volunteer</option>
            <option value="premium">Premium Member</option>
          </select>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}
