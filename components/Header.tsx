import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-brand-white py-4 shadow-sm">
            <div className="relative container mx-auto flex items-center justify-center">
                {/* Logo */}
                <Link href="/" className="absolute left-0 text-brand-black font-medium tracking-wider text-md">
                    swire creative
                </Link>

                {/* Navigation */}
                <nav className="flex gap-6">
                {[
                    { label: "how it works", target: "how" },
                    { label: "membership", target: "benefits" },
                    { label: "pricing", target: "pricing" },
                    { label: "add-ons", target: "addons" },
                    { label: "faq", target: "faq" },
                ].map(({ label, target }, i) => (
                    <a
                    key={i}
                    href={`#${target}`}
                    className="relative text-sm font-medium font-sans text-brand-black pb-1 
                                hover:after:content-[''] hover:after:absolute hover:after:left-0 
                                hover:after:bottom-0 hover:after:w-full hover:after:border-opacity-1 hover:after:border-b-2 
                                hover:after:border-brand-purple transition-all duration-500"
                    >
                    {label}
                    </a>
                ))}

                </nav>


                {/* CTA Button */}
                <Link href="#" className="absolute right-0 inline-block px-8 py-2 rounded-md border-2 border-brand-purple bg-brand-white text-brand-black text-sm tracking-wider font-medium hover:bg-brand-black hover:text-brand-white hover:border-brand-black transition duration-350">
                    login
                </Link>
            </div>
        </header>
    )
}