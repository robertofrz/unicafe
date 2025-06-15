import { useFeedback } from "../context/FeedbackContext";

function Total() {
  const { good, neutral, bad } = useFeedback();

  const total = good + neutral + bad;

  return (
    <div className="flex items-center justify-between bg-[#fcf3ea] border border-[#5a38208a] shadow rounded-xl w-[95%] text-[#5a3820] inter py-2 px-4">
      <h2 className="font-medium">Total of Feedbacks</h2>
      <p>{total}</p>
    </div>
  );
}
export default Total;
