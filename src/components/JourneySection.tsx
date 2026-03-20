import { Button } from "@/components/ui/button";

export function JourneySection() {
	return (
		<section
			className="mx-auto grid max-w-7xl gap-8 overflow-x-clip px-5 py-16 sm:px-6 md:grid-cols-[1fr_minmax(0,1.2fr)_1fr] md:px-10 md:py-20"
			id="sobre"
		>
			<img
				alt="Noiva em editorial no Espaço MAGA"
				className="landing-tilted-image md:-rotate-3"
				height={580}
				loading="lazy"
				src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
				width={420}
			/>

			<div className="flex flex-col items-center justify-center text-center">
				<p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
					Enjoy your event
				</p>
				<h2 className="text-balance font-(--font-display) text-3xl leading-[1.02] text-foreground sm:text-4xl md:text-5xl">
					Sua jornada para um evento impecavel começa aqui
				</h2>
				<p className="mt-6 max-w-lg text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
					Da ideia inicial ao ultimo brinde, desenhamos uma experiencia sob
					medida com planejamento, decoracao e operacao para seu momento
					acontecer com fluidez, personalidade e impacto.
				</p>
				<Button className="mt-8 min-h-11 rounded-none px-8 text-xs uppercase tracking-[0.2em]">
					Explore
				</Button>
			</div>

			<img
				alt="Casal de maos dadas durante cerimonia"
				className="landing-tilted-image md:rotate-3"
				height={580}
				loading="lazy"
				src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80"
				width={420}
			/>
		</section>
	);
}
