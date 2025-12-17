import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function StatCard({ title, value, trend, data, color = "#ffdf00" }) {
  return (
    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.2} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-gold/10 overflow-hidden"
      >
        <div className="flex justify-between items-center mb-2 relative z-10">
          <span className="text-xs uppercase tracking-wider text-gray-300 font-semibold">
            {title}
          </span>
          <span className={`text-xs font-bold ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 relative z-10 drop-shadow-md">{value}</h3>

        <div className="h-20 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="val"
                stroke={color}
                strokeWidth={2}
                fill={`url(#gradient-${title})`}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="absolute inset-0 opacity-10 z-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />
      </motion.div>
    </Tilt>
  );
}