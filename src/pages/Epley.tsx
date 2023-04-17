import { useState, ChangeEvent, MouseEvent } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/Icon";
import RemoveCircle from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Card from "@mui/material";

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

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#000000", // Change this color code
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  return (
    <>
      <h1>Epley Formula</h1>{" "}
      <form>
        <label>
          <h1>Weight:</h1>
          <input
            className="weight-input-text"
            placeholder="Enter weight used here."
            value={epleyWeight.weight}
            onChange={handleWeight}
            type="text"
            name="weight"
          />{" "}
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
        </label>

        <label>
          <h1>Reps:</h1>
          <input
            className="reps-input-text"
            placeholder="Enter repetitions performed here."
            value={epleyReps.reps}
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
        </label>

        <br />
      </form>
      <h1>
        1RM ={" "}
        {Math.round(epleyReps.reps * epleyWeight.weight * 0.033) +
          epleyWeight.weight}{" "}
      </h1>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Button className="toggle-math-button" onClick={toggleMath}>
          {showMath ? "Hide Math" : "Show Math"}
        </Button>{" "}
        <AntSwitch
          checked={showMath}
          onClick={toggleMath}
          inputProps={{ "aria-label": "ant design" }}
          className="math-switch"
        />
      </div>
      {showMath && (
        <div className="math">
          <h2>
            {" "}
            (0.033 x {epleyReps.reps} x {epleyWeight.weight}) +{" "}
            {epleyWeight.weight}
          </h2>{" "}
        </div>
      )}
    </>
  );
}
