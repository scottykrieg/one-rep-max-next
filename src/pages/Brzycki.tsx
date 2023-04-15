import { useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/Icon";
import RemoveCircle from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

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
      <h1>Brzycki Formula</h1>
      <form>
        <label>
          Weight:
          <input
            className="weight-input-text"
            placeholder="Enter weight used here."
            value={brzyckiWeight.weight.toString()}
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
            value={brzyckiReps.reps.toString()}
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
      </form>
      <h1>
        1RM =
        {Math.round(
          brzyckiWeight.weight / (1.0278 - 0.0278 * brzyckiReps.reps)
        )}{" "}
      </h1>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Button className="toggle-math-button" onClick={toggleMath}>
          {showMath ? "Hide Math" : "Show Math"}
        </Button>{" "}
        <AntSwitch
          checked={showMath}
          onClick={toggleMath}
          inputProps={{ "aria-label": "ant design" }}
        />
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
