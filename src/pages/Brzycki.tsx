import { useState } from "react";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/IconButton";
import RemoveCircle from "@mui/icons-material/Remove";

// import TextPreview from "./Textpreview";

export default function Brzycki() {
  const [brzyckiWeight, setBrzyckiWeight] = useState<{ weight: number }>({
    weight: 100,
  });
  const [brzyckiReps, setBrzyckiReps] = useState<{ reps: number }>({ reps: 2 });
  const [showMath, setShowMath] = useState(false);

  function handleWeight(e: React.ChangeEvent<HTMLInputElement>) {
    setBrzyckiWeight({
      ...brzyckiWeight,
      weight: parseFloat(e.target.value),
    });
  }
  function handleReps(e: React.ChangeEvent<HTMLInputElement>) {
    setBrzyckiReps({
      ...brzyckiReps,
      reps: parseFloat(e.target.value),
    });
  }

  function addWeight(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setBrzyckiWeight({
      ...brzyckiWeight,
      weight: brzyckiWeight.weight + 5,
    });
  }
  function subtractWeight(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setBrzyckiWeight({
      ...brzyckiWeight,
      weight: brzyckiWeight.weight - 5,
    });
  }

  function addReps(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setBrzyckiReps({
      ...brzyckiReps,
      reps: brzyckiReps.reps + 1,
    });
  }
  function subtractReps(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setBrzyckiReps({
      ...brzyckiReps,
      reps: brzyckiReps.reps - 1,
    });
  }

  function toggleMath() {
    setShowMath(!showMath);
  }

  return (
    <>
      <h1>Brzycki Formula</h1>
      <form>
        <label>
          <h1>Weight:</h1>{" "}
          <input
            className="weight-input-text"
            placeholder="Enter weight used here."
            value={brzyckiWeight.weight.toString()}
            onChange={handleWeight}
            type="text"
            name="weight"
          />
          <br />
          <IconButton className="add-weight-button" onClick={addWeight}>
            <AddBoxIcon />
          </IconButton>
          <IconButton
            className="subtract-weight-button"
            onClick={subtractWeight}
          >
            <RemoveCircle />
          </IconButton>
          <br />
        </label>

        <label>
          <h1>Reps:</h1>
          <input
            className="reps-input-text"
            placeholder="Enter repetitions performed here."
            value={brzyckiReps.reps}
            onChange={handleReps}
            type="text"
            name="reps"
          />
          <br />
          <IconButton className="add-reps-button" onClick={addReps}>
            <AddBoxIcon />
          </IconButton>
          <IconButton className="subtract-reps-button" onClick={subtractReps}>
            <RemoveCircle />
          </IconButton>
          <br />
        </label>
      </form>
      <h1>
        1RM ={" "}
        {Math.round(
          brzyckiWeight.weight / (1.0278 - 0.0278 * brzyckiReps.reps)
        )}{" "}
      </h1>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Button className="toggle-math-button" onClick={toggleMath}>
          {showMath ? "Hide Math" : "Show Math"}
        </Button>{" "}
      </div>
      {showMath && (
        <div className="math">
          <h2>
            {brzyckiWeight.weight} ÷ [(1.0278) - (0.0278 x {brzyckiReps.reps})]
          </h2>
        </div>
      )}
    </>
  );
}
