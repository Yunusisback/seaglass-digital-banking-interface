import { User } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-4 md:px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between">
            <div className="pointer-events-none select-none">
              <img
                src="/seaglogo.png"
                alt="SeaGlass Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            <div className="hidden md:flex items-center gap-10">
              {['AnaSayfa', 'Avantajlar', 'Kartlar', 'İletişim'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] font-bold uppercase tracking-widest text-white/80 hover:text-cyan-800 transition-all duration-300 active:text-cyan-600"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button className="cursor-pointer flex items-center justify-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-400 active:to-blue-500 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] rounded-xl border border-white/20 transition-all duration-300 shadow-[0_4px_15px_rgba(6,182,212,0.3)] active:scale-95 touch-manipulation">
                <span>Müşteri Ol</span>
              </button>

              <button className="cursor-pointer hidden md:flex items-center gap-2 px-5 py-2.5 bg-black/50 hover:bg-black/70 active:bg-black/70 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/10 hover:border-cyan-400/50 active:border-cyan-400/50 transition-all duration-500 backdrop-blur-2xl group shadow-xl active:scale-95">
                <User
                  size={20}
                  className="text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] group-hover:scale-110 group-active:scale-110 transition-transform"
                />
                <span className="group-hover:text-cyan-300 group-active:text-cyan-300 transition-colors">Giriş Yap</span>
              </button>

              <button className="md:hidden w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 cursor-pointer active:scale-90 active:bg-black/60 transition-all touch-manipulation">
                <User size={20} className="text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;