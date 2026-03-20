import { Button } from "@/components/ui/button";
import { tablescapeImages } from "../lib/data";

export function TablescapeSection() {
	return (
		<section className="bg-[#f8f5f1] py-20" id="contato">
			<div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
				<img
					alt="Mesa montada com decoracao e velas"
					className="h-full min-h-80 w-full object-cover sm:min-h-125"
					height={850}
					loading="lazy"
					src={tablescapeImages[0]}
					width={700}
				/>
				<div className="flex flex-col justify-center">
					<p className="text-xs uppercase tracking-[0.28em] text-[#5b5149]">
						Bespoke Tablescapes
					</p>
					<h3 className="mt-3 font-(--font-script) text-5xl leading-none text-[#2f2924] sm:text-6xl md:text-7xl">
						Styling de mesa
					</h3>
					<h4 className="mt-1 font-(--font-display) text-3xl text-[#2f2924] sm:text-4xl md:text-5xl">
						com assinatura MAGA
					</h4>
					<p className="mt-5 max-w-xl text-sm leading-7 text-[#5f564f] sm:text-base">
						Desenvolvemos composicoes autorais para jantar, brunch e festa,
						escolhendo texturas, flores, loucas e luz para transformar cada mesa
						em uma experiencia sensorial memoravel.
					</p>
					<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{tablescapeImages.slice(1).map((image, index) => (
							<img
								alt={`Detalhe de tablescape ${index + 1}`}
								className="aspect-square w-full object-cover"
								height={260}
								key={image}
								loading="lazy"
								src={image}
								width={260}
							/>
						))}
					</div>
					<Button className="mt-8 h-11 w-fit rounded-none px-8 text-xs uppercase tracking-[0.2em]">
						Solicitar proposta
					</Button>
				</div>
			</div>
		</section>
	);
}
