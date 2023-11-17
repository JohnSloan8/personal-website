import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo2 = dynamic(import("./Parallax2"), {
  ssr: false,
});

const SkillsCommunication = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
              <div className="kura_tm_main_title light">
                <h3>Communication & Teamwork</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                  10 years experience teaching and mentoring in Linguistics and
                  Computer Science from elementary to third level.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Teaching</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Public Speaking</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Video Production</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Teamwork</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">Leadership</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <ParallaxVideo2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCommunication;
