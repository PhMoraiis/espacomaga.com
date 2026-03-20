import { Button } from "./ui/button";

export function HeroSection() {
	return (
		<section className="relative isolate min-h-svh overflow-hidden">
			<video
				autoPlay
				className="pointer-events-none absolute inset-0 h-full w-full object-cover"
				loop
				muted
				playsInline
				poster="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80"
				preload="metadata"
			>
				<source src="/OnCine.mp4" type="video/mp4" />
			</video>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-black/45"
			/>

			<div className="relative z-10 mx-auto flex min-h-svh max-w-4xl flex-col items-center justify-center px-5 pt-20 text-center sm:px-6 sm:pt-24">
				<h1 className="text-balance font-sans text-4xl text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl">
					Criando momentos mágicos e Especiais
				</h1>
				<p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base md:mt-7 md:text-lg">
					Um espaço autoral para casamentos, festas e celebrações corporativas.
					Uma experiência impecável para você e seus convidados.
				</p>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<Button variant="ghost" className="group relative inline-flex min-h-11 items-center justify-center px-8 text-sm font-semibold tracking-[0.16em] text-white uppercase">
						Comece sua jornada
						<span className="pointer-events-none absolute right-8 bottom-0 left-8 h-px bg-white opacity-95 transition-opacity duration-300 group-hover:opacity-80" />
					</Button>
				</div>
			</div>
		</section>
	);
}
