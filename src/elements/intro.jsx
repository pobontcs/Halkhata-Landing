export default function Intro() {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 bg-slate-50/50 border-t border-orange-100" id="credits">
            
           
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-orange-100 border border-orange-50 flex flex-col items-center text-center max-w-2xl mx-6 animate-slide-up">
                
                <span className="text-orange-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4">
                    Lead Developer
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black text-amber-950 uppercase tracking-tighter mb-2">
                    Abdullah Al Hossain
                </h2>
                
                <div className="h-1 w-12 bg-orange-500 rounded-full mb-6"></div>
                
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-1">
                    Institution
                </p>
                
                <p className="text-amber-900 font-black text-lg md:text-xl">
                    Independent University, Bangladesh
                </p>

               
                <div className="mt-8 px-6 py-2 bg-amber-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Computer Science & Engineering
                </div>
            </div>

        
            <p className="mt-10 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                © 2026 HalKhata • Built with Flutter & Firebase
            </p>
        </div>
    );
}