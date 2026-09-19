
const Footer = () => {
  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "tel", placeholder: "Phone Number" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Address" },
  ];

  return (
    <footer className="bg-[#0b2740] text-[#c3d4e2] pt-16 pb-7">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7 grid md:grid-cols-[1fr_1.4fr] gap-12">
        {/* Contact info */}
        <div>
          <div>
            <h4 className="text-white font-head font-bold text-[14px] tracking-[0.08em] uppercase mb-3">
              Email
            </h4>
            <p className="text-white text-[17px] font-semibold">info@coloradoradontests.com</p>
          </div>
          <div className="mt-7">
            <h4 className="text-white font-head font-bold text-[14px] tracking-[0.08em] uppercase mb-3">
              Hours
            </h4>
            <p className="text-[15px]">Monday & Friday: 9AM & 5PM</p>
            <p className="text-[15px]">Saturday & Sunday: Closed</p>
          </div>
          <div className="mt-7">
            <h4 className="text-white font-head font-bold text-[14px] tracking-[0.08em] uppercase mb-3">
              Call or Text
            </h4>
            <a href="tel:7204548388" className="text-white text-[17px] font-semibold hover:text-teal transition-colors">
              (720) 454-8388
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h4 className="text-white font-head font-bold text-[14px] tracking-[0.08em] uppercase mb-4">
            Contact Us
          </h4>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {formFields.map((field, i) => (
              <input
                key={i}
                type={field.type}
                placeholder={field.placeholder}
                className="bg-[#0f3253] border border-[#1d456b] text-[#eaf2f9] placeholder-[#8ba7c0] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:border-teal"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={4}
              className="md:col-span-2 bg-[#0f3253] border border-[#1d456b] text-[#eaf2f9] placeholder-[#8ba7c0] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:border-teal resize-none"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[16px] rounded-[10px] py-3.5 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1180px] mx-auto px-5 md:px-7 mt-11 pt-6 border-t border-[#1d3d5a] flex flex-col md:flex-row justify-between items-center gap-2 text-[13.5px] text-[#8ba7c0]">
        <p>& 2024 Colorado Radon Testing & All Rights Reserved</p>
        <a
          href="https://jaymedehoyos.github.io"
          target="_blank"
          rel="noreferrer"
          className="text-[#9fc0dc] hover:text-white transition-colors"
        >
          Powered by Jayme DeHoyos
        </a>
      </div>
    </footer>
  );
};

export default Footer;


