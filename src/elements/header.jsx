import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Added offset so the sticky header doesn't cover the section title
            const offset = 100; 
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false); 
    };

    return (
        <div className="sticky top-0 flex flex-row w-full p-4 border-b border-orange-100 items-center justify-between px-6 md:px-10 bg-white/90 backdrop-blur-md z-[100] animate-slide-up">
            
            {/* Brief Button & Multibox */}
            <div className="relative">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-amber-950 text-white px-6 py-2 rounded-full font-bold uppercase tracking-tighter hover:bg-amber-900 transition-all shadow-md active:scale-95 animate-slide-left"
                >
                    Brief {isOpen ? '▲' : '▼'}
                </button>

                {isOpen && (
                    <div className="absolute top-14 left-0 w-52 bg-white border border-orange-100 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 animate-slide-up">
                        {/* Clean Bold Links */}
                        <button onClick={() => scrollToSection('hero')} className="text-left px-4 py-3 hover:bg-orange-50 rounded-xl text-amber-950 font-black uppercase text-xs tracking-widest transition">
                            Home
                        </button>
                        
                        <div className="h-[1px] bg-orange-50 mx-2 my-1"></div>
                        
                        <button onClick={() => scrollToSection('warehouse')} className="text-left px-4 py-3 hover:bg-orange-50 rounded-xl text-amber-950 font-black uppercase text-xs tracking-widest transition">
                            Warehouse
                        </button>
                        
                        <button onClick={() => scrollToSection('orders')} className="text-left px-4 py-3 hover:bg-orange-50 rounded-xl text-amber-950 font-black uppercase text-xs tracking-widest transition">
                            Orders
                        </button>
                        
                        <button onClick={() => scrollToSection('sales')} className="text-left px-4 py-3 hover:bg-orange-50 rounded-xl text-amber-950 font-black uppercase text-xs tracking-widest transition">
                            Analysis
                        </button>

                        <div className="h-[1px] bg-orange-50 mx-2 my-1"></div>

                        <button onClick={() => scrollToSection('download')} className="text-left px-4 py-3 bg-orange-600 text-white rounded-xl font-black uppercase text-xs tracking-widest transition shadow-lg shadow-orange-100">
                            Download
                        </button>
                    </div>
                )}
            </div>

            {/* Logo Center */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                <img src="/logo.png" alt="HalKhata Logo" className="h-10 w-auto" />
                <h2 className="text-amber-950 font-black text-2xl tracking-tighter uppercase">HalKhata</h2>
            </div>

            {/* Right Action */}
            <div className="hidden md:block">
                <button 
                    onClick={() => scrollToSection('download')}
                    className="text-orange-600 font-black uppercase text-xs tracking-widest border-2 border-orange-600 px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all"
                >
                    Get App
                </button>
            </div>
        </div>
    );
}