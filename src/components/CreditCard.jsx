import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function CreditCard() {
  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} tiltReverse glareEnable glareMaxOpacity={0.3} className="w-full perspective-1000">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative h-60 w-full rounded-[2.5rem] p-8 overflow-hidden border border-white/20 backdrop-filter backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-gold/20 transform-style-3d"
      >
        <div className="flex justify-between items-start relative z-10">
          <h2 className="text-3xl font-black italic tracking-tighter text-white drop-shadow-md">VISA</h2>
          <div className="w-12 h-8 bg-gold/30 rounded-lg border border-gold/50 flex items-center justify-center shadow-inner">
            <div className="w-7 h-5 bg-gold/60 rounded-sm"></div>
          </div>
        </div>
        <div className="mt-14 text-xl font-mono tracking-[0.3em] text-white/90 relative z-10 drop-shadow">
          **** **** **** 8828
        </div>
        <div className="mt-auto flex justify-between items-end relative z-10">
          <p className="text-3xl font-bold text-gold drop-shadow-lg">$74,330</p>
          <div className="text-right text-[10px] text-gray-300 font-bold uppercase">
            <p>09/27</p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <path d="M0,150 Q150,50 400,150" fill="none" stroke="#ffdf00" strokeWidth="2" className="animate-pulse" />
            <circle cx="200" cy="100" r="50" fill="url(#holoGrad)" opacity="0.2" />
            <defs>
              <radialGradient id="holoGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#ffdf00" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffdf00" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </Tilt>
  );
}