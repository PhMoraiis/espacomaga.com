import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { setupGallery } from "../lib/data";

export function SetupDecorSection() {
	return (
		<section className="bg-[#131418] py-20 text-white">
			<div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
				<h3 className="text-center font-(--font-display) text-4xl sm:text-5xl">
					Event Set-up & Decor
				</h3>
				<p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/75 sm:text-base">
					Criamos cenarios que conectam narrativa, identidade visual e conforto.
					Cada composicao e pensada para valorizar o momento e impressionar em
					todos os angulos.
				</p>
				<Separator className="mx-auto my-9 max-w-4xl bg-white/20" />
				<div className="grid gap-6 md:grid-cols-3">
					{setupGallery.map((item) => (
						<Card
							className="overflow-hidden rounded-none border-white/15 bg-transparent text-white"
							key={item.title}
						>
							<img
								alt={item.title}
								className="aspect-4/3 w-full object-cover"
								height={440}
								loading="lazy"
								src={item.image}
								width={640}
							/>
							<CardContent className="p-4">
								<p className="text-sm uppercase tracking-[0.2em] text-white/90">
									{item.title}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
