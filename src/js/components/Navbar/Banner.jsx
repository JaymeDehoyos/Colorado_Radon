import { XMarkIcon } from "@heroicons/react/24/outline";

function Banner() {
  return (
    <div className="relative bg-[#fffbe6] border-b border-[#fde68a] py-3 shadow-md">
      
      {/* Centered container */}
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 px-6 text-center">
        
        {/* Safety yellow pill */}
        <span className="inline-flex items-center rounded-full bg-[#facc15] px-4 py-1.5 text-sm font-semibold text-[#1f2933]">
          Important
        </span>

        {/* Message */}
        <p className="text-sm md:text-base text-[#1f2933]">
          <strong className="font-semibold">(720) 454-8388</strong>
          <span className="mx-2 text-[#facc15]">•</span>
          Keep Your Home Safe Today
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="rounded-md bg-[#facc15] px-4 py-1.5 text-sm font-medium text-[#1f2933] hover:bg-[#eab308] transition"
        >
          Free Quote
        </a>

        {/* Dismiss */}
        <button
          type="button"
          className="absolute right-4 rounded-md p-2 text-[#6b7280] hover:bg-[#fef3c7] transition"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
