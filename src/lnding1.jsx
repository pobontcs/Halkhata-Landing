import Header from "./elements/header"; // Now matching the default export
import Features from "./elements/Features";
export default function Landing() { // Added 'default' here
    return (
        <div className="flex flex-col h-screen w-screen bg-white">
             <Header />
             <div className="flex-1 flex items-center justify-center">
                <Features/>
             </div>
        </div>
    );
}