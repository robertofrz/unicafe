import FeedbackPieChart from "./components/FeedbackPieChart";
import TotalContainer from "./components/Total";
import FeedbackButtons from "./components/FeedbackContainer";

function App() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 sm:w-[400px] w-[90vw] sm:h-[600px] h-[70vh] bg-[#e9d8c7] rounded-lg p-3 border-t-6 border-b-6 border-[#82512D] shadow-lg text-center text-[#6e4527]">
      <h1 className="expresso text-6xl -mb-3">Unicafe</h1>
      <p className="inter opacity-70 font-bold mb-2">
        Help us serve you better! Give your feedback about our coffee shop.
      </p>
      <FeedbackButtons />
      <FeedbackPieChart />
      <TotalContainer />
      <p className="inter font-bold text-center">
        Your feedback means a lot. <br /> See you next time!
      </p>
    </div>
  );
}

export default App;
