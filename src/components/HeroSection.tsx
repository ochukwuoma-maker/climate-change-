import React from "react";
import { HOTLINK_IMAGES } from "../data/mockData";

interface HeroSectionProps {
  onExplore: () => void;
  onLogin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onLogin,
}) => {
  return (
    <section className="py-12 md:py-16 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#6E9445]/10 text-[#2E5D3D] rounded-full border border-[#6E9445]/20">
            <span className="material-symbols-outlined text-sm">science</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
              Climate intelligence platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[4.25rem] font-bold text-[#2E5D3D] leading-[0.98] tracking-[-0.05em] max-w-xl">
            Artificial Intelligence-Based Climate Change Impact{" "}
            <span className="text-[#2E5D3D]">Prediction in</span> West
            Africa.
          </h1>

          <p className="text-[#43493C] text-base sm:text-lg max-w-xl leading-7">
            EcoPredict AI combines environmental data, regional modeling, and
            decision support workflows to help planners understand risk earlier
            and act with more confidence.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onLogin}
              className="bg-[#6E9445] hover:bg-[#2E5D3D] text-white px-8 py-3.5 rounded-xl font-semibold shadow-sm active:scale-[0.99] cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={onExplore}
              className="bg-white border border-[#E8E3DA] hover:border-[#6E9445]/30 text-[#43493C] hover:text-[#2E5D3D] px-8 py-3.5 rounded-xl font-semibold shadow-sm active:scale-[0.99] cursor-pointer flex items-center gap-2"
            >
              <span>Open platform</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="relative group cursor-pointer" onClick={onExplore}>
          <div className="absolute inset-0 rounded-[28px] bg-[#6E9445]/5"></div>

          <div className="relative z-10 overflow-hidden rounded-[20px] border border-[#E8E3DA] bg-white shadow-[0_16px_40px_rgba(23,29,23,0.06)] transition-transform duration-200 ease-[cubic-bezier(0.2,0,0.1,1)] group-hover:-translate-y-1">
            <img
              src={HOTLINK_IMAGES.dashboardMockup}
              alt="EcoPredict AI Dashboard Mockup"
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 bg-[#2E5D3D]/0 group-hover:bg-[#2E5D3D]/5 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 bg-[#2E5D3D] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transform translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.2,0,0.1,1)] flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">login</span>
                <span>Open dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
