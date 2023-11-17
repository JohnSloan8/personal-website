import React from "react";

const Timeline = () => {
  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Work</h3>
          </div>
          <div className="timeline_list">
            <ul>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>December, 2021 - present</span>
                </div>
                <div className="list_inner">
                  <span>Software Engineer</span>
                </div>
                <div className="list_inner">
                  <span>ABAIR, Trinity College Dublin</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>September, 2018 - August, 2019</span>
                </div>
                <div className="list_inner">
                  <span>Head Tutor</span>
                </div>
                <div className="list_inner">
                  <span>UCD Computer Science</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner">
                  <span>September, 2016 - August, 2018</span>
                </div>
                <div className="list_inner">
                  <span>TA & Demonstrator</span>
                </div>
                <div className="list_inner">
                  <span>UCD Computer Science</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner">
                  <span>September, 2009 - July, 2015</span>
                </div>
                <div className="list_inner">
                  <span>Director</span>
                </div>
                <div className="list_inner">
                  <span>
                    존의 영어학원 (John&apos;s English Academy), Seoul, South
                    Korea
                  </span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner">
                  <span>September, 2008 - August, 2010</span>
                </div>
                <div className="list_inner">
                  <span>Business English Teacher</span>
                </div>
                <div className="list_inner">
                  <span>Chungdahm Learning, Seoul, South Korea</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="kura_tm_timeline" id="educationTimeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <h3>Education</h3>
          </div>
          <div className="timeline_list">
            <ul>
              <li className="wow fadeInUp" data-wow-duration=".7s">
                <div className="list_inner">
                  <span>September 2016 - September 2021</span>
                </div>
                <div className="list_inner">
                  <span>PhD Computer Science</span>
                </div>
                <div className="list_inner">
                  <span>University College Dublin</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner">
                  <span>September, 2015 - August, 2016</span>
                </div>
                <div className="list_inner">
                  <span>MA Linguistics</span>
                </div>
                <div className="list_inner">
                  <span>University College Dublin</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner">
                  <span>September, 2002 - June, 2007</span>
                </div>
                <div className="list_inner">
                  <span>BEng Architecture & Structural Engineering</span>
                </div>
                <div className="list_inner">
                  <span>University of Sheffield</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
