import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomToolTip";
import { useFeedback } from "../context/FeedbackContext";

type FeedbackItem = {
  name: string;
  value: number;
};

const COLORS: string[] = ["#548c2f", "#ffd449", "#f95738"];

function Chart() {
  const { good, neutral, bad } = useFeedback();

  const feedbackData: FeedbackItem[] = [
    { name: "Positive", value: good },
    { name: "Neutral", value: neutral },
    { name: "Negative", value: bad },
  ];

  return (
    <div className=" bg-[#fcf3ea] border border-[#5a38208a] shadow rounded-xl w-[95%] h-[230px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={feedbackData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={360}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
          >
            {feedbackData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
