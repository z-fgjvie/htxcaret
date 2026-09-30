import { VscLoadingCompact } from "react-icons/vsc";

export default function Loading() {
  return (
    <div className="absolute z-10 inset-0 flex items-center justify-center bg-white/50">
      <VscLoadingCompact className="animate-spin text-[#0b57d0]" size={35} />
    </div>
  );
}
