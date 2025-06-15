import { useFeedback } from "../context/FeedbackContext";
import Button from "./Button";

function ButtonsContainer() {
  const { good, setGood, neutral, setNeutral, bad, setBad } = useFeedback();

  return (
    <div className="flex items-center justify-evenly gap-2 bg-[#fcf3ea] border border-[#5a38208a] shadow p-2 rounded-xl w-[95%]">
      <Button
        onClick={() => setGood(good + 1)}
        imgPath="Positive"
        altText="Green cup with a happy face – positive feedback"
      />
      <hr className="w-px h-12 bg-neutral-300 border-0" />

      <Button
        onClick={() => setNeutral(neutral + 1)}
        imgPath="Neutral"
        altText="Yellow cup with a neutral face – neutral feedback"
      />
      <hr className="w-px h-12 bg-neutral-300 border-0" />
      <Button
        onClick={() => setBad(bad + 1)}
        imgPath="Negative"
        altText="Red cup with an angry face – negative feedback"
      />
    </div>
  );
}
export default ButtonsContainer;
