import { useFeedback } from "../context/FeedbackContext";
import Button from "./FeedbackButton";

function FeedbackButtons() {
  const { good, setGood, neutral, setNeutral, bad, setBad } = useFeedback();

  return (
    <div className="flex items-center justify-evenly gap-2 bg-[#f7ece1] border-2 border-[#82512D] shadow-xl p-2 rounded-xl w-[90%]">
      <Button
        onClick={() => setGood(good + 1)}
        imgPath="positive"
        altText="Green cup with a happy face – positive feedback"
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        imgPath="neutral"
        altText="Yellow cup with a neutral face – neutral feedback"
      />
      <Button
        onClick={() => setBad(bad + 1)}
        imgPath="negative"
        altText="Red cup with an angry face – negative feedback"
      />
    </div>
  );
}
export default FeedbackButtons;
