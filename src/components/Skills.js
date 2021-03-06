import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const ParallaxVideo = dynamic(import("./Parallax"), {
  ssr: false,
});

const Skills = () => {
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
                <span>Skills</span>
                <h3>Programming Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                  Five years experience in bringing a diverse range of highly technical projects through the full software development lifecycle.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">JavaScript</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Python</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">R</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">HTML &amp; CSS</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Django</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Node</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">React</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Web Animation (three.js)</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Web Speech API</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Blender</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Databases (SQL & noSQL)</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Data Analysis (Pandas, Scikit-learn, Jupyter)</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">Data Visualisation (Matplotlib, three.js)</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="">
                  <span>
                    <span className="label">NLP (NLTK, spaCy)</span>
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
              <ParallaxVideo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
