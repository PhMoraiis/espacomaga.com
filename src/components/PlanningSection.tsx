import { Button } from "@/components/ui/button";

export function PlanningSection() {
	return (
		<section className="bg-[#ece5dd]" id="planejamento">
			<div className="mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-[1.15fr_0.35fr_1fr]">
				<img
					alt="Convidados comemorando durante festa"
					className="h-full min-h-72 w-full object-cover sm:min-h-85"
					height={700}
					loading="lazy"
					src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
					width={900}
				/>

				<div className="flex items-center justify-center border-y border-black/10 px-3 py-6 md:border-x md:border-y-0 md:py-8">
					<p className="font-(--font-display) text-4xl tracking-[0.28em] text-black/55 md:-rotate-90 md:text-6xl md:tracking-[0.35em]">
						PLANNING
					</p>
				</div>

				<div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 md:px-12">
					<p className="text-xs uppercase tracking-[0.28em] text-black/60">
						Say goodbye to stress
					</p>
					<h3 className="mt-4 font-(--font-display) text-3xl leading-tight text-[#2f2924] sm:text-4xl">
						Planejamento completo e coordenacao no dia
					</h3>
					<p className="mt-5 text-sm leading-7 text-[#4f4640] sm:text-base">
						Reunimos producao, cronograma, fornecedores e direcao de cena para
						que voce viva o seu evento sem preocupacoes, com uma equipe dedicada
						a cada detalhe.
					</p>
					<Button className="mt-8 h-11 w-fit rounded-none px-8 text-xs uppercase tracking-[0.2em]">
						Quero conversar
					</Button>
				</div>
			</div>
		</section>
	);
}
