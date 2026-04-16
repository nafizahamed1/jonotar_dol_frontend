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
          <h2 className="text-xl sm:text-2xl font-bold text-primary">
            সদস্য হতে আবেদন করুন
          </h2>

          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-dark transition text-lg"
          >
            ✕
          </button>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-4">
          আমাদের প্ল্যাটফর্মে যুক্ত হয়ে আপডেট, সংবাদ ও বিভিন্ন কার্যক্রমে অংশগ্রহণ করুন।
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("আপনার আবেদন সফলভাবে জমা হয়েছে!");
            handleClose();
          }}
          className="space-y-3"
        >
          
          {/* Personal Info */}
          <input
            type="text"
            placeholder="পূর্ণ নাম"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
            required
          />

          <input
            type="email"
            placeholder="ইমেইল ঠিকানা"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
            required
          />

          <input
            type="tel"
            placeholder="মোবাইল নাম্বার"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
            required
          />

          {/* Membership Type */}
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
            required
          >
            <option value="">সদস্যের ধরন নির্বাচন করুন</option>
            <option value="general">সাধারণ সদস্য</option>
            <option value="supporter">সমর্থক</option>
            <option value="volunteer">স্বেচ্ছাসেবক</option>
            <option value="premium">প্রিমিয়াম সদস্য</option>
          </select>

          {/* Payment Section */}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold text-dark mb-2">
              পেমেন্ট তথ্য
            </h3>

            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              required
            >
              <option value="">পেমেন্ট পদ্ধতি নির্বাচন করুন</option>
              <option value="bkash">বিকাশ (bKash)</option>
              <option value="nagad">নগদ (Nagad)</option>
              <option value="rocket">রকেট (Rocket)</option>
            </select>

            <p className="text-xs text-gray-500 mt-2">
              টাকা পাঠান: 01XXXXXXXXX (ব্যক্তিগত নাম্বার)
            </p>

            <input
              type="text"
              placeholder="Transaction ID (ট্রানজেকশন আইডি)"
              className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              required
            />

            <input
              type="number"
              placeholder="পরিমাণ (টাকা)"
              className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold text-sm sm:text-base"
          >
            এখনই যোগ দিন
          </button>
        </form>
      </div>
    </div>
  );
}