// "use client";
// import { FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function DomainForSale() {
//   const handleContactClick = () => {
//     const user = "giro.axons-4t";
//     const domain = "icloud.com";
//     const email = `${user}@${domain}`;
//     const mailto = `mailto:${email}?subject=Domain%20Inquiry&body=Hi,%20I'm%20interested%20in%20your%20domain.`;
//     window.location.href = mailto;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 relative overflow-hidden">
//       {/* Soft floating background shapes */}
//       <motion.div
//         animate={{ y: [0, 25, 0], opacity: [0.25, 0.35, 0.25] }}
//         transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//         className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"
//       />
//       <motion.div
//         animate={{ y: [0, -25, 0], opacity: [0.25, 0.35, 0.25] }}
//         transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
//         className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl"
//       />

//       {/* Main Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-2xl w-full bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-12 text-center relative z-10 border border-white/40"
//       >
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
//           This Domain is{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             For Sale
//           </span>
//         </h1>

//         <p className="text-gray-600 font-medium mt-6 text-lg leading-relaxed">
//           Own this{" "}
//           <span className="font-semibold text-gray-800 mr-1">premium domain</span>
//           give your brand a lasting, luxurious presence online.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.04 }}
//           whileTap={{ scale: 0.96 }}
//           onClick={handleContactClick}
//           aria-label="Contact domain owner"
//           className="mt-10 inline-flex items-center gap-3 px-10 py-4
//             bg-gradient-to-r from-blue-600 to-purple-600
//             text-white text-lg font-semibold
//             rounded-xl shadow-md
//             hover:shadow-xl transition-all"
//         >
//           <FaEnvelope className="text-xl" />
//           Contact Us
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }

export default function DomainForSale() {
  const handleContactClick = () => {
    const user = "lumps-basso4f";
    const domain = "icloud.com";
    const email = `${user}@${domain}`;
    const mailto = `mailto:${email}?subject=Domain%20Inquiry&body=Hi,%20I'm%20interested%20in%20your%20domain.`;
    window.location.href = mailto;
  };
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-[#f8f8f0] overflow-hidden relative">
      {/* Left Illustration */}
      <img
        src="/images/illustrationThree.PNG"
        alt="Left Illustration"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/3 w-[260px] md:w-[320px] object-contain"
      />

      <img
        src="/images/illustrationTwo.PNG"
        alt="Right Illustration"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/3 w-[260px] md:w-[320px] object-contain"
      />

      <div className="flex items-center justify-center">
        <img
          src="/images/illustration.PNG"
          alt="Center Illustration"
          className="w-[300px] md:w-[360px] object-contain"
        />
      </div>

      <button
        className="text-3xl md:text-5xl font-serif mt-10 text-[#0b2a45]"
        onClick={handleContactClick}
      >
        Domain for Sale
      </button>
    </section>
  );
}
