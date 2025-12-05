import { ArrowRight } from "lucide-react";
import { SectionBadge } from "../UIComponents";
import { HeroScene } from "../QuantumScene";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-violet-500/10 dark:from-primary/20 dark:to-violet-500/20 opacity-50" />
      <HeroScene />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 text-center lg:flex-row lg:text-left">

        <div className="flex flex-col gap-6 lg:w-1/2">
          <SectionBadge className="bg-blue-900/50 mx-auto text-blue-300 border border-blue-700/50 mb-6">
            Enterprise Operating System
          </SectionBadge>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-5xl md:text-6xl">
            All-In-One Software Suite for Every Industry
          </h1>
          <p className="max-w-xl text-lg text-text-light-secondary dark:text-text-dark-secondary lg:mx-0">
            Streamline your operations with a single, powerful platform
            designed to adapt to your unique business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="flex h-14 min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-lg font-bold text-white shadow-neu-light dark:shadow-neu-dark hover:brightness-110 active:brightness-95 transition-all duration-200">
              <span className="truncate">Get Started</span>
            </button>
            <button className="group h-14 px-8 rounded-full border-2 border-white text-white text-lg font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-200 flex items-center gap-2 relative overflow-hidden">
              <span className="relative z-10">Watch Demo</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <div className="aspect-4/3 rounded-lg bg-background-light dark:bg-background-dark p-4 shadow-neu-light dark:shadow-neu-dark">
            <div
              className="h-full w-full rounded bg-cover bg-center"
              data-alt="A clean and modern software dashboard UI with various charts and graphs."
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC00t7A6b60TDagokEqZPmqfZvQzu6nByOiVMb7UU9KE5ibgezHYK8JtecPiLWoRycj1HHIFci-VUINrQYCmQ-gsgB4_pLPRtKWk1IgcW8T8lia2VmhtzYeYSbBkNhyEXznrRQe3Kqr_crN1NRI88jHzPwz5aVBb7XmQBk6ePeVJTmcoRpYjxGhz8yHUcA69MzmIN9gV2eVoXy3OlIjHw3_yPCtwpOhGg0PpdBd8tEZWMCPpD_cSXohMPI5CQYJwqXbYoX8DIqVpSM")'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
