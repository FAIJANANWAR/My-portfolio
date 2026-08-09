export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1217] flex flex-col items-center justify-center font-sans p-6">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Station Spinner */}
        <div className="w-12 h-12 rounded-2xl bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-center text-[#D96B43] shadow-sm">
          <div className="w-5 h-5 border-2 border-[#D96B43] border-t-transparent rounded-full animate-spin" />
        </div>
        <span className="text-xs font-bold text-[#4A1D24] uppercase tracking-widest animate-pulse">
          Loading Station Data...
        </span>
      </div>
    </div>
  );
}
