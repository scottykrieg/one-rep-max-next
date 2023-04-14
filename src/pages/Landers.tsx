import { useState, ChangeEvent, MouseEvent } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/Icon";
import RemoveCircle from "@mui/icons-material/Remove";
// import TextPreview from "./Textpreview";

interface LanderWeightState {
  weight: number;
}

interface LanderRepsState {
  reps: number;
}

export default function Landers(): JSX.Element {
  const [landersWeight, setLandersWeight] = useState<LanderWeightState>({
    weight: 100,
  });
  const [landersReps, setLandersReps] = useState<LanderRepsState>({ reps: 2 });
  const [showMath, setShowMath] = useState(false);

  function handleWeight(e: ChangeEvent<HTMLInputElement>): void {
    setLandersWeight({
      ...landersWeight,
      weight: parseInt(e.target.value),
    });
  }

  function handleReps(e: ChangeEvent<HTMLInputElement>): void {
    setLandersReps({
      ...landersReps,
      reps: parseInt(e.target.value),
    });
  }

  function addWeight(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setLandersWeight({
      ...landersWeight,
      weight: landersWeight.weight + 5,
    });
  }

  function subtractWeight(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setLandersWeight({
      ...landersWeight,
      weight: landersWeight.weight - 5,
    });
  }

  function addReps(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setLandersReps({
      ...landersReps,
      reps: landersReps.reps + 1,
    });
  }

  function subtractReps(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setLandersReps({
      ...landersReps,
      reps: landersReps.reps - 1,
    });
  }

  function toggleMath() {
    setShowMath(!showMath);
  }

  return (
    <>
      <h1>Landers Formula</h1>
      <form>
        <label>
          Weight:
          <input
            className="weight-input-text"
            placeholder="Enter weight used here."
            value={landersWeight.weight}
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
            value={landersReps.reps}
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
        {Math.round(
          (100 * landersWeight.weight) / (101.3 - 2.67123 * landersReps.reps)
        )}{" "}
      </h1>{" "}
      <Button className="toggle-math-button" onClick={toggleMath}>
        {showMath ? "Hide Math" : "Show Math"}
      </Button>{" "}
      {showMath && (
        <div className="math">
          <h2>
            100 x {landersWeight.weight} ÷ (101.3 - (2.67123 x{" "}
            {landersReps.reps}
            ))
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
