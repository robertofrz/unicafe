import Chart from "./components/Chart";
import Total from "./components/Total";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 sm:w-[400px] w-[90vw] sm:h-[600px] h-[70vh] bg-[#e0cab3] rounded-xl p-3 text-center text-[#5a3820] inter">
      <h1 className="coffee text-5xl mt-3 -mb-2">Unicafe o</h1>
      <p>
        Help us serve you better! <br /> Give your feedback below
      </p>
      <ButtonsContainer />
      <Chart />
      <Total />
      <p className="font-bold text-lg">
        Your feedback means a lot <br /> See you next time!
      </p>
    </div>
  );
}

export default App;
