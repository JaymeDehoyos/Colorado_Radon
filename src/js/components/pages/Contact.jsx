import Footer from "../../../Footer";
import Holli from "../../../assets/holli.jpg";
import Jared from "../../../assets/Jared.jpg";

const team = [
  { img: Holli, name: "Holli", cert: "NRPP Cert. ID 113160-RMP", license: "Colorado License: RME.0000251" },
  { img: Jared, name: "Jared", cert: "NRPP Cert. ID 113480-RMP", license: "Colorado License: RME.0000362" },
];

function Contact() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f7fbff] to-white pt-16 md:pt-20 pb-4 text-center px-5">
        <span className="inline-flex items-center gap-2 bg-[#e2f1f0] text-[#0b7f7a] font-bold text-[12.5px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-4">
          Get In Touch
        </span>
        <h1 className="font-head font-extrabold text-[38px] md:text-[52px] tracking-tight">Contact Us</h1>
        <p className="mt-4 text-[18px] text-muted max-w-[560px] mx-auto">
          NRPP-certified, EPA-protocol radon measurement professionals serving Colorado.
        </p>
      </section>

      {/* TEAM */}
      <section className="max-w-[1180px] mx-auto py-14 md:py-16 px-5 md:px-7">
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((p) => (
            <div key={p.name} className="bg-white border border-hairline rounded-[20px] p-8 text-center shadow-[0_16px_40px_rgba(15,52,87,0.06)]">
              <img src={p.img} alt={p.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-[#eaf2f9]" />
              <p className="font-head font-bold text-[22px] text-ink">{p.name}</p>
              <p className="text-[15px] mt-1">{p.cert}</p>
              <p className="text-[15px]">{p.license}</p>
            </div>
          ))}
        </div>

        {/* BIO */}
        <div className="bg-soft border border-hairline rounded-[20px] p-8 md:p-10 mt-8 text-center max-w-[900px] mx-auto">
          <p className="text-[17px] leading-relaxed">
            Holli and Jared have been Colorado residents for over 10 years. They have experience and
            are knowledgeable about the effects radon has on families. We understand the importance of
            testing homes and businesses for radon exposure, and we are NRPP certified and follow EPA
            protocols for radon measurements.
          </p>
          <p className="text-[17px] leading-relaxed mt-4">
            Jared has experience as a licensed contractor, certified home inspector, and licensed radon
            measurement professional. Holli has experience as a licensed real estate agent and licensed
            radon measurement professional. They enjoy spending time in the mountains, snowboarding, and
            paddle boarding with their family.
          </p>
          <p className="text-[15px] mt-6 font-semibold text-ink">
            PLEASE NOTE: We do NOT install radon mitigation systems. We have experience and resources to
            guide you through getting a radon mitigation system installed if the radon test comes back
            above the EPA recommended guideline.
          </p>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="bg-soft py-14 md:py-16 px-5">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="font-head font-extrabold text-[30px] md:text-[36px] tracking-tight">Message Us</h2>
          <p className="mt-3 text-[16px]">
            Have questions? Call or text{" "}
            <a href="tel:7204548388" className="text-brandblue font-semibold">(720) 454-8388</a>{" "}
            or fill out the form and we'll get back to you as soon as possible. Email:{" "}
            <a href="mailto:info@coloradoradontests.com" className="text-brandblue font-semibold">info@coloradoradontests.com</a>
          </p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            <input type="text" placeholder="Name" className="p-3.5 rounded-[10px] border border-hairline bg-white focus:outline-none focus:border-brandblue" />
            <input type="tel" placeholder="Phone Number" className="p-3.5 rounded-[10px] border border-hairline bg-white focus:outline-none focus:border-brandblue" />
            <input type="email" placeholder="Email" className="p-3.5 rounded-[10px] border border-hairline bg-white focus:outline-none focus:border-brandblue" />
            <input type="text" placeholder="Address" className="p-3.5 rounded-[10px] border border-hairline bg-white focus:outline-none focus:border-brandblue" />
            <textarea rows={4} placeholder="Message" className="sm:col-span-2 p-3.5 rounded-[10px] border border-hairline bg-white focus:outline-none focus:border-brandblue resize-none" />
            <button type="submit" className="sm:col-span-2 bg-brandblue hover:bg-brandblued text-white font-head font-bold text-[16px] rounded-[10px] py-3.5 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
