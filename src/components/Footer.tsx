import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-700 to-green-700 text-white mt-12">

      <div className="container px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              জনতার দল
            </h2>

            <p className="text-white/80 text-sm mt-3 leading-relaxed">
              ন্যায়, দক্ষতা ও দেশপ্রেমের ভিত্তিতে একটি আধুনিক রাজনৈতিক প্ল্যাটফর্ম।
              জনগণের ক্ষমতা জনগণের হাতে ফিরিয়ে দেওয়াই আমাদের লক্ষ্য।
            </p>

            <p className="mt-4 font-semibold">
              “ইনসাফ জিন্দাবাদ”
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">লিংক</h3>

            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/news" className="hover:text-white">News</Link></li>
              <li><Link to="/leaders" className="hover:text-white">Leaders</Link></li>
              <li><Link to="/manifesto" className="hover:text-white">Manifesto</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>

            <div className="text-white/80 text-sm space-y-2">

              <p>📞 +880 1322-932105</p>
              <p>📧 janotardol@gmail.com</p>
            </div>

            {/* Social Buttons */}
           <div className="mt-4 flex flex-wrap gap-3">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/1JanotarDol/"
    target="_blank"
    className="flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm transition font-semibold"
  >
    <FaFacebook className="text-blue-600 text-lg" />
    Facebook
  </a>

  {/* YouTube */}
  <a
    href="#"
    target="_blank"
    className="flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm transition font-semibold"
  >
    <FaYoutube className="text-red-600 text-lg" />
    YouTube
  </a>

  {/* X */}
  <a
    href="#"
    target="_blank"
    className="flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm transition font-semibold"
  >
    <FaXTwitter className="text-black text-lg" />
    X
  </a>

  {/* WhatsApp */}
  <a
    href="#"
    target="_blank"
    className="flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm transition font-semibold"
  >
    <FaWhatsapp className="text-green-600 text-lg" />
    WhatsApp
  </a>

 

  {/* Telegram */}
  <a
    href="#"
    target="_blank"
    className="flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm transition font-semibold"
  >
    <FaTelegram className="text-sky-500 text-lg" />
    Telegram
  </a>

</div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-10 pt-6 text-center">
          <p className="text-white/70 text-xs sm:text-sm">
            © 2026 জনতার দল. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;