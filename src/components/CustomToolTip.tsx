type CustomToolTipProps = {
  active?: boolean;
  payload?: { name: string; value: number }[];
};

const CustomTooltip = ({ active, payload }: CustomToolTipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-[#f7ece1] border-2 border-[#82512D] text-[#82512D] p-3 rounded-lg shadow-lg">
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
