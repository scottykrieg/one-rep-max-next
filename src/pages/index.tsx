import Head from "next/head";
import { Inter } from "next/font/google";
import { Card } from "@mui/material";
import { GiWeightLiftingUp } from "react-icons/gi";
import CalcBox from "@/components/CalcBox";
import ThreeScene from "@/components/ThreeScene";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>1RM Calculator</title>
      </Head>
      <main>
        <ThreeScene />
        <h1>One Rep Max Calculator</h1>
        <CalcBox />
        <p>
          Using 3 popular formulas: Brzycki, Landers, and Epley you can find out
          your theoretical one-rep-max, the amount of weight you can perform for
          one repetition of any given exercise.{" "}
        </p>
        <p>
          This can be a safer way to test maximum strength than attempting a
          true one rep max, because of the lighter weights being used.
        </p>
        <h1>Example:</h1>
        <h2>Brzycki Formula</h2>{" "}
        <h3>
          Using this example: According to the Brzycki formula, if you are able
          to perform an exercise for 7 repetitions at 85lbs, your one-rep-max
          for that exercise is 102 lbs.
        </h3>
        <div id="example">
          <div id="example1">
            <Card>
              <GiWeightLiftingUp size={30} /> x 7 @ 85lbs = <h2>102</h2>
              <h2 style={{ color: "black" }}>1RM = 102 lbs</h2>
            </Card>
          </div>
          <div>
            <br />
            <br />
            <h1>VS.</h1>
            <br />
            <br />
            <br />
            <h2>102 =</h2> <h3>85 ÷ [(1.0278) - (0.0278 x 7)]</h3>
          </div>
          <div id="example2">
            <Card>
              <GiWeightLiftingUp size={50} /> x 1 @ 100bs = <h3>100</h3>
              <h2 style={{ color: "black" }}>1RM = 100 lbs</h2>
            </Card>
          </div>
        </div>
        <p>Click one of the links above to test this yourself!</p>
      </main>
    </>
  );
}
