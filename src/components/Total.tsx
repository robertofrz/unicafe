import { useFeedback } from "../context/FeedbackContext";

function TotalContainer() {
  const { good, neutral, bad } = useFeedback();

  const total = good + neutral + bad;

  return (
    <div className="flex items-center justify-between bg-[#f7ece1] border-2 border-[#82512D] shadow rounded-xl w-[90%] text-[#82512D] inter py-2 px-4">
      <h2 className="font-bold">Total of Feedbacks:</h2>
      <p>{total}</p>
    </div>
  );
}
export default TotalContainer;
