export const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-[#d9756c] mb-2">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )