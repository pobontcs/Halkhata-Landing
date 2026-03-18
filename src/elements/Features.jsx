import { motion } from "framer-motion";

export default function Features() {
    // Faster, tighter animations for a snappier feel
    const slideLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const slideRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="flex flex-col min-h-screen w-full bg-white px-6 md:px-20 py-16 overflow-x-hidden" id="features">
            
            {/* --- 1. HERO SECTION (Target for Home button) --- */}
            <div className="max-w-6xl mx-auto w-full mb-32 pt-10" id="hero">
                <h3 className="text-amber-950 font-black text-5xl md:text-7xl tracking-tighter uppercase mb-6 animate-slide-up">
                    Welcome to <span className="text-orange-600">Halkhata</span>
                </h3>
                
                <div className="relative border-l-4 border-orange-500 overflow-hidden">
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl pl-6 animate-slide-left">
                        Revolutionizing financial management with speed. 
                        Clean, sharp, and built for modern business.
                    </p>
                </div>
            </div>

            {/* --- Features Content --- */}
            <div className="max-w-5xl mx-auto flex flex-col gap-32 w-full">
                
                {/* --- 2. WAREHOUSE SECTION --- */}
                <motion.div 
                    id="warehouse"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideLeft}
                    className="flex flex-col md:flex-row items-center justify-between gap-12 scroll-mt-24"
                >
                    <div className="w-full md:w-[300px] flex justify-center">
                        <img src="/warehouse.png" alt="Warehouse" className="w-[280px] h-auto rounded-[2.5rem] shadow-2xl border-[12px] border-slate-900" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-3xl font-black text-amber-950 uppercase mb-4">Warehouse</h4>
                        <p className="text-slate-500 leading-relaxed font-medium">Real-time stock tracking with instant low-stock indicators. Manage your inventory without the clutter.</p>
                    </div>
                </motion.div>

                {/* --- 3. ORDERS SECTION --- */}
                <motion.div 
                    id="orders"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideRight}
                    className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 scroll-mt-24"
                >
                    <div className="w-full md:w-[300px] flex justify-center">
                        <img src="/order.png" alt="Orders" className="w-[280px] h-auto rounded-[2.5rem] shadow-2xl border-[12px] border-slate-900" />
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <h4 className="text-3xl font-black text-amber-950 uppercase mb-4">Orders</h4>
                        <p className="text-slate-500 leading-relaxed font-medium">Lightning-fast order fulfillment. Our mobile-first interface ensures you never miss a sale while on the move.</p>
                    </div>
                </motion.div>

                {/* --- 4. SALES/ANALYSIS SECTION --- */}
                <motion.div 
                    id="sales"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideLeft}
                    className="flex flex-col items-center gap-12 scroll-mt-24"
                >
                    <div className="text-center">
                        <h4 className="text-3xl font-black text-amber-950 uppercase mb-2">Analysis</h4>
                        <p className="text-slate-500 font-medium">Visual data to power your decisions.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <img src="/sales.png" className="w-[240px] h-auto rounded-3xl shadow-lg border-4 border-white" />
                        <img src="/salesDash.png" className="w-[240px] h-auto rounded-3xl shadow-lg border-4 border-white" />
                    </div>
                </motion.div>

            </div>

            {/* --- 5. DOWNLOAD SECTION --- */}
            <div 
                id="download" 
                className="mt-40 text-center bg-orange-600 p-12 rounded-[3rem] text-white max-w-4xl mx-auto w-full shadow-2xl shadow-orange-100 scroll-mt-24"
            >
                <h2 className="text-4xl font-black uppercase mb-6 italic tracking-tighter">Get HalKhata Now</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform text-xs">Play Store</button>
                    <button className="bg-white text-orange-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform text-xs">App Store</button>
                </div>
            </div>
        </div>
    );
}