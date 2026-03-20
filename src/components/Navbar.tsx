import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";

const navItems = [
	{ label: "Sobre", href: "#sobre" },
	{ label: "Servicos", href: "#planejamento" },
	{ label: "Eventos", href: "#planejamento" },
	{ label: "Contato", href: "#contato" },
];

export const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-10">
			<div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 md:px-10 md:py-7">
				<div className="flex items-center justify-between lg:hidden">
					<p className="m-0 text-center font-(--font-display) text-xl tracking-[0.2em] text-white sm:text-2xl sm:tracking-[0.24em]">
						MAGA
					</p>

					<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
						<SheetTrigger
							render={
								<Button
									aria-label="Abrir menu"
									className="size-10 cursor-pointer rounded-none border border-white/35 bg-black/30 text-white hover:bg-black/45 sm:size-11"
									variant="ghost"
								/>
							}
						>
							<MenuIcon />
						</SheetTrigger>

						<SheetContent
							className="w-[86vw] max-w-sm border-white/20 bg-black/85 text-white backdrop-blur-md"
							side="right"
						>
							<SheetHeader className="pt-8">
								<SheetTitle className="font-(--font-display) text-3xl tracking-[0.18em] text-white">
									MAGA
								</SheetTitle>
								<SheetDescription className="uppercase tracking-[0.18em] text-white/75">
									Navegacao
								</SheetDescription>
							</SheetHeader>

							<motion.nav
								animate={{ opacity: 1, y: 0 }}
								className="mt-8 flex flex-col gap-1 px-4"
								initial={{ opacity: 0, y: 14 }}
								transition={{ duration: 0.25, ease: "easeOut" }}
							>
								{navItems.map((item, index) => (
									<motion.a
										animate={{ opacity: 1, x: 0 }}
										className="landing-link rounded-none px-2 py-4 text-lg uppercase tracking-[0.16em] text-white"
										href={item.href}
										initial={{ opacity: 0, x: 16 }}
										key={item.label}
										onClick={() => setMobileMenuOpen(false)}
										transition={{ delay: 0.04 * (index + 1), duration: 0.2 }}
									>
										{item.label}
									</motion.a>
								))}
							</motion.nav>

							<div className="mt-auto p-4">
								<SheetClose
									render={
										<Button
											className="h-11 w-full rounded-none border border-white/35 bg-transparent uppercase tracking-[0.16em] text-white hover:bg-white/10"
											variant="outline"
										/>
									}
								>
									Fechar
								</SheetClose>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				<nav
					aria-label="Navegacao principal"
					className="hidden w-full items-center justify-between gap-6 text-sm uppercase tracking-[0.2em] text-white/90 lg:flex xl:tracking-[0.24em]"
				>
					<div className="flex items-center gap-8">
						<a className="landing-link" href="#sobre">
							Sobre
						</a>
						<a className="landing-link" href="#planejamento">
							Servicos
						</a>
					</div>
					<div className="flex items-center justify-center">
						<Logo width="30%" height="0%" />
					</div>
					<div className="flex items-center gap-8">
						<a className="landing-link" href="#planejamento">
							Eventos
						</a>
						<a className="landing-link" href="#planejamento">
							Contato
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
};
