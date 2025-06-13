import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomToolTip";
import { useFeedback } from "../context/FeedbackContext";

const COLORS = ["#548c2f", "#ffd449", "#f95738"];

function FeedbackPieChart() {
  const { good, neutral, bad } = useFeedback();
  const feedbackData = [
    { name: "Positive", value: good },
    { name: "Neutral", value: neutral },
    { name: "Negative", value: bad },
  ];

  return (
    <div className=" bg-[#f7ece1] border-2 border-[#82512D] shadow rounded-xl w-[90%] h-[230px]">
      <ResponsiveContainer>
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

export default FeedbackPieChart;
