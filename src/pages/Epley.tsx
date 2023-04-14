import { useState, ChangeEvent, MouseEvent } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/Icon";
import RemoveCircle from "@mui/icons-material/Remove";
// import TextPreview from "./Textpreview";

export default function Epley(): JSX.Element {
  const [epleyWeight, setEpleyWeight] = useState<{ weight: number }>({
    weight: 100,
  });
  const [epleyReps, setEpleyReps] = useState<{ reps: number }>({ reps: 2 });
  const [showMath, setShowMath] = useState(false);

  function handleWeight(e: ChangeEvent<HTMLInputElement>): void {
    setEpleyWeight({
      ...epleyWeight,
      weight: parseFloat(e.target.value),
    });
  }
  function handleReps(e: ChangeEvent<HTMLInputElement>): void {
    setEpleyReps({
      ...epleyReps,
      reps: parseFloat(e.target.value),
    });
  }

  function addWeight(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setEpleyWeight({
      ...epleyWeight,
      weight: epleyWeight.weight + 5,
    });
  }
  function subtractWeight(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setEpleyWeight({
      ...epleyWeight,
      weight: epleyWeight.weight - 5,
    });
  }

  function addReps(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setEpleyReps({
      ...epleyReps,
      reps: epleyReps.reps + 1,
    });
  }
  function subtractReps(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setEpleyReps({
      ...epleyReps,
      reps: epleyReps.reps - 1,
    });
  }

  function toggleMath() {
    setShowMath(!showMath);
  }

  return (
    <>
      <h1>Epley Formula</h1>
      <form>
        <label>
          Weight:
          <input
            className="weight-input-text"
            placeholder="Enter weight used here."
            value={epleyWeight.weight}
            onChange={handleWeight}
            type="text"
            name="weight"
          />
        </label>

        <IconButton className="add-weight-button" onClick={addWeight}>
          <AddBoxIcon />
        </IconButton>
        <IconButton className="subtract-weight-button" onClick={subtractWeight}>
          <RemoveCircle />
        </IconButton>
        <label>
          Reps:
          <input
            className="reps-input-text"
            placeholder="Enter repetitions performed here."
            value={epleyReps.reps}
            onChange={handleReps}
            type="text"
            name="reps"
          />
        </label>
        <IconButton className="add-reps-button" onClick={addReps}>
          <AddBoxIcon />
        </IconButton>
        <IconButton className="subtract-reps-button" onClick={subtractReps}>
          <RemoveCircle />
        </IconButton>
        <br />
      </form>
      <h1>
        1RM ={" "}
        {Math.round(epleyReps.reps * epleyWeight.weight * 0.033) +
          epleyWeight.weight}{" "}
      </h1>
      <Button className="toggle-math-button" onClick={toggleMath}>
        {showMath ? "Hide Math" : "Show Math"}
      </Button>{" "}
      {showMath && (
        <div className="math">
          <h2>
            {" "}
            (0.033 x {epleyReps.reps} x {epleyWeight.weight}) +{" "}
            {epleyWeight.weight}
          </h2>{" "}
        </div>
      )}
      <Link href="/">
        <Button className="back-to-top">Back to top.</Button>
      </Link>
      {/* <TextPreview
        previewText="This is a preview of the text."
        fullText="This is the full text that will be displayed when the 'read more' button is clicked."
      /> */}
    </>
  );
}
