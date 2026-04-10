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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-x-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-[90%] max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-6 z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-primary">Become a Member</h2>

          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-dark transition text-lg"
            aria-label="Close membership popup"
          >
            ✕
          </button>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-4">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition text-sm sm:text-base"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition text-sm sm:text-base"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition text-sm sm:text-base"
            required
          />

          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition text-sm sm:text-base"
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
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold text-sm sm:text-base"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}
