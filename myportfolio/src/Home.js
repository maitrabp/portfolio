import React from "react";
import Typical from "react-typical";

function Home() {
  let name = "Maitra_Patel";
  return (
    <div id="Home">
      <div className="overlay">
        <div className="centered">
          <div className="homeText">
            <Typical
              loop={1}
              wrapper="c"
              steps={[
                "<",
                500,
                "<" + name,
                500,
                "<" + name + "/",
                500,
                "<" + name + "/>",
                1000,
              ]}
            />
          </div>
          <div className="subText">
            {" "}
            I'm a
            <span id="redText">
              <Typical
                loop={Infinity}
                wrapper="c"
                steps={[
                  " student.",
                  1000,
                  " designer.",
                  1000,
                  " software engineer.",
                  1000,
                  " tech enthusiast.",
                  3000,
                ]}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
