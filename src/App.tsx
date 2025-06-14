import FeedbackPieChart from "./components/FeedbackPieChart";
import TotalContainer from "./components/Total";
import FeedbackButtons from "./components/FeedbackContainer";

function App() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 sm:w-[400px] w-[90vw] sm:h-[600px] h-[70vh] bg-[#e0cab3] rounded-xl p-3 shadow-xl text-center text-[#5a3820]">
      <h1 className="coffee text-5xl -mb-2">Unicafe o</h1>
      <p className="inter mb-1 ">
        Help us serve you better! <br /> Give your feedback about our coffee
        shop.
      </p>
      <FeedbackButtons />
      <FeedbackPieChart />
      <TotalContainer />
      <p className="inter font-bold text-center text-lg">
        Your feedback means a lot. <br /> See you next time!
      </p>
    </div>
  );
}

export default App;
