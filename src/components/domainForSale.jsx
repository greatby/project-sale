import { FaEnvelope } from "react-icons/fa";

export default function DomainForSale() {
  const handleContactClick = () => {
    
    const user = "giro.axons-4t";
    const domain = "icloud.com";
    const email = `${user}@${domain}`;


    const mailto = `mailto:${email}?subject=Domain%20Inquiry&body=Hi,%20I'm%20interested%20in%20your%20domain.`;

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 text-center relative overflow-hidden">
        
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight relative z-10">
          This Domain is <span className="text-blue-600">For Sale</span>
        </h1>
        <p className="text-gray-600 font-semibold mt-6 text-lg relative z-10">
          Own this premium domain and elevate your brand’s presence.
        </p>

        <button
          onClick={handleContactClick}
          className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:-translate-y-1"
        >
          <FaEnvelope className="text-xl" />
          Contact Us
        </button>
      </div>
    </div>
  );
}
