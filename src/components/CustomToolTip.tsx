import type { TooltipProps } from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload?.length) {
    const data = payload[0];
    return (
      <div className="bg-[#fcf3ea] flex flex-col items-start border border-[#5a38208a] text-[#5a3820] p-3 rounded-xl shadow-lg inter">
        <strong>{data.name}</strong>
        <div>
          {data.value} {data.value === 1 ? "feedback" : "feedbacks"}
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
