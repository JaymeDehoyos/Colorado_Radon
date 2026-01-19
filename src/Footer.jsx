
const Footer = () => {
  const contactInfo = [
    {
      title: "Email",
      items: ["info@coloradoradontests.com"],
    },
    {
      title: "Hours",
      items: [
        "Monday - Friday: 9AM - 5PM",
        "Saturday & Sunday: Closed",
      ],
    },
  ];

  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "tel", placeholder: "Phone Number" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Address" },
  ];

  return (
    <footer className="bg-[#faf7f0] text-[#444444] py-12 px-6">
      {/* Top Section */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((section) => (
            <div key={section.title}>
              <h3
                className="text-lg font-semibold uppercase tracking-wider"
                style={{ color: "#b29982" }}
              >
                {section.title}
              </h3>
              <ul className="mt-2 space-y-1 text-[#666666]">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h3
            className="text-lg font-semibold uppercase tracking-wider mb-4"
            style={{ color: "#b29982" }}
          >
            Contact Us
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields.map((field, index) => (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                className="p-3 rounded-md border border-[#ccc] bg-white text-[#444444] placeholder-[#999] focus:outline-none focus:ring-2"
                style={{ focusRingColor: "#b29982" }}
              />
            ))}
            <textarea
              placeholder="Message"
              className="md:col-span-2 p-3 rounded-md border border-[#ccc] bg-white text-[#444444] placeholder-[#999] focus:outline-none focus:ring-2 resize-none"
              rows={4}
              style={{ focusRingColor: "#b29982" }}
            />
            <button
              type="submit"
              className="md:col-span-2 py-3 font-semibold rounded-md text-white transition duration-200"
              style={{ backgroundColor: "#b29982" }}
            >
              Send
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-[1240px] mx-auto mt-12 border-t border-[#d6c9b9] pt-6 flex flex-col md:flex-row justify-between items-center text-[#666666] text-sm">
        <p>© 2024 Colorado Radon Tests - All Rights Reserved</p>
        <a
          href="#"
          className="mt-2 md:mt-0"
          style={{ color: "#b29982" }}
        >
          Powered by Jayme DeHoyos
        </a>
      </div>
    </footer>
  );
};

export default Footer;

