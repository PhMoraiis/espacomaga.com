import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { highlights } from "../lib/data";

export function WhyChooseSection() {
	return (
		<section className="bg-(--maga-forest) py-20 text-white" id="portfolio">
			<div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-2 md:px-10">
				<div>
					<h3 className="font-(--font-display) text-4xl leading-[0.95] sm:text-5xl">
						Por que escolher o MAGA?
					</h3>
					<div className="mt-8 flex flex-col gap-5">
						{highlights.map((item) => (
							<Card
								className="rounded-none border-white/20 bg-white/5 text-white"
								key={item}
							>
								<CardHeader>
									<CardTitle className="text-lg font-medium">
										Diferencial
									</CardTitle>
									<CardDescription className="text-white/80">
										{item}
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
					<Button
						className="mt-8 h-11 rounded-none border-white/45 bg-transparent px-8 text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10"
						variant="outline"
					>
						Conheca nosso acervo
						<ArrowRight data-icon="inline-end" />
					</Button>
				</div>

				<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
					<img
						alt="Mesa montada para evento com flores"
						className="col-span-2 aspect-4/3 w-full object-cover"
						height={800}
						loading="lazy"
						src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
						width={1200}
					/>
					<img
						alt="Detalhes de decoracao floral"
						className="aspect-square w-full object-cover"
						height={500}
						loading="lazy"
						src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80"
						width={500}
					/>
					<img
						alt="Casal em ensaio no local do evento"
						className="aspect-square w-full object-cover"
						height={500}
						loading="lazy"
						src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80"
						width={500}
					/>
				</div>
			</div>
		</section>
	);
}
