import Scene from "./engine/Scene";
import CreditCard from "./components/CreditCard";
import { LayoutDashboard, CreditCard as CardIcon, Wallet, FileText, Settings, LogOut, Search, Plus } from "lucide-react";

const d1 = [{val: 20}, {val: 45}, {val: 30}, {val: 55}, {val: 40}, {val: 65}];
const d2 = [{val: 40}, {val: 25}, {val: 35}, {val: 15}, {val: 30}, {val: 20}];

export default function App() {
  return (
    <div className="h-screen w-screen flex p-8 gap-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Scene />

      {/* Sidebar */}
      <aside className="w-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl z-20 flex flex-col items-center py-10 gap-12 shadow-2xl">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
          <LayoutDashboard size={24} className="text-yellow-400" />
        </div>
        <nav className="flex flex-col gap-8 text-gray-400">
          <CardIcon size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
          <Wallet size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
          <FileText size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
          <Settings size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
        </nav>
        <LogOut size={24} className="mt-auto text-gray-500 hover:text-red-400 cursor-pointer transition-colors" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex gap-8 z-10">
        {/* Left & Center: Stats Grid */}
        <section className="flex-[2] flex flex-col gap-8">
          <header className="flex justify-between items-center">
            <h1 className="text-4xl font-black text-white tracking-tight">Financial Hub</h1>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-48"
              />
            </div>
          </header>

        </section>

        {/* Right Panel */}
        <section className="flex-1 max-w-md flex flex-col gap-8">
          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-lg font-bold text-white">Emma Takureea</p>
              <p className="text-xs uppercase tracking-wider text-yellow-400/70">Gold Member</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=emma" alt="Profile" className="w-12 h-12 rounded-full border-2 border-yellow-400/50 object-cover" />
          </div>

          <CreditCard />

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between flex-1 shadow-2xl">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Savings Goal</h3>
              <p className="text-5xl font-black text-white mt-2 tracking-tighter">$1,000,000</p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between text-xs uppercase tracking-wider mb-3">
                <span className="text-gray-400">Progress</span>
                <span className="text-yellow-400 font-bold">70%</span>
              </div>
              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden shadow-inner">
                <div className="h-full w-[70%] bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-[0_0_20px_rgba(255,223,0,0.6)] transition-all duration-1000" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}