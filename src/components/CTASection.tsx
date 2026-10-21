import React from "react";

interface CTASectionProps {
  onLogin: () => void;
  onExplore: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onLogin,
  onExplore,
}) => {
  return (
    <section className="py-16 md:py-20 px-6 bg-[#FBF9F5]">
      <div className="max-w-[1280px] mx-auto bg-[#2E5D3D] rounded-[20px] p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-[0_14px_32px_rgba(20,30,20,0.08)]">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.05em]">
            Ready to work with climate data?
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-7">
            Join the research environment and explore forecast workflows built
            for West African climate planning.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onLogin}
              className="bg-[#EFB333] hover:bg-[#EFB333]/90 text-[#2E5D3D] px-10 py-3.5 rounded-xl font-semibold text-base shadow-sm active:scale-[0.99] cursor-pointer"
            >
              Login to platform
            </button>
            <button
              onClick={onExplore}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/25 px-8 py-3.5 rounded-xl font-semibold text-base cursor-pointer"
            >
              Explore dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
