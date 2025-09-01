// export default function DomainForSale() {
//   const handleContactClick = () => {
//     const user = "lumps-basso4f";
//     const domain = "icloud.com";
//     const email = `${user}@${domain}`;
//     const mailto = `mailto:${email}?subject=Domain%20Inquiry&body=Hi,%20I'm%20interested%20in%20your%20domain.`;
//     window.location.href = mailto;
//   };

//   return (
//     <section className="flex flex-col items-center justify-center text-center h-screen bg-[#f8f8f0] overflow-hidden relative px-4">
//       {/* Left Illustration */}
//       <img
//         src="/images/illustrationThree.PNG"
//         alt="Left Illustration"
//         className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] lg:w-[320px] object-contain"
//       />

//       {/* Right Illustration */}
//       <img
//         src="/images/illustrationTwo.PNG"
//         alt="Right Illustration"
//         className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] lg:w-[320px] object-contain"
//       />

//       {/* Center Illustration */}
//       <div className="flex items-center justify-center">
//         <img
//           src="/images/illustration.PNG"
//           alt="Center Illustration"
//           className="w-[340px] md:w-[460px] lg:w-[520px] object-contain"
//         />
//       </div>

//       {/* Button */}
//       <div className="mt-10">
//         <button
//           className="text-3xl md:text-5xl font-serif text-[#0b2a45] hover:underline transition"
//           onClick={handleContactClick}
//         >
//           Domain for Sale
//         </button>
//         <p className="text-sm md:text-base text-gray-600 mt-2">
//           Click above to contact
//         </p>
//       </div>
//     </section>
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
    <div className="max-w-7xl mx-auto bg-[#f8f8f0]">
      <section className="flex flex-col items-center justify-center text-center h-screen  overflow-hidden relative">
        {/* Floating animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .float {
            animation: float 6s ease-in-out infinite;
          }
          .float-slow {
            animation: float 8s ease-in-out infinite;
          }
        `}</style>

        <img
          src="/images/illustrationThree.PNG"
          alt="Left Illustration"
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 
                   w-[28vw] max-w-[260px] object-contain float-slow"
        />

        <img
          src="/images/illustrationTwo.PNG"
          alt="Right Illustration"
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 
                   w-[28vw] max-w-[260px] object-contain float-slow"
        />

        <div className="flex items-center justify-center">
          <img
            src="/images/illustration.png"
            alt="Center Illustration"
            className="w-full h-auto sm:w-[50vw] sm:max-w-[600px] object-contain float"
          />
        </div>

        <div className="relative group">
          <button
            className="text-3xl md:text-5xl font-serif text-[#0b2a45] relative z-10 hover:underline transition"
            onClick={handleContactClick}
          >
            Domain for Sale
          </button>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            This could be yours - Send us an email
          </p>
        </div>
      </section>
    </div>
  );
}
