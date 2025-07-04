import React from "react";
import "./achievements.css";
import { achievements } from "../../data/achievements";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="achievement-text">Projects</h2>

      <div className="achievement-row">
        {achievements &&
          achievements.map((achievement) => (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-achievement-box"
              key={achievement.id}
            >
              <div
                className="my-achievement"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <h4 className="achievement-name">
                  {achievement.achievement_name}
                </h4>
                <p className="achievement-desc">
                  {achievement.achievement_description}
                </p>
              </div>
            </a>
          ))}
      </div>
    </section>
  );
};
export default Achievements;
