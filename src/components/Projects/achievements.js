import React, { useState } from "react";
import "./achievements.css";
import { achievements } from "../../data/achievements";

const Achievements = () => {
  const [page, setPage] = useState(0);
  const tilesPerPage = 4;

  const totalPages = Math.ceil(achievements.length / tilesPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const visibleAchievements = achievements.slice(
    page * tilesPerPage,
    (page + 1) * tilesPerPage
  );

  return (
    <section id="achievements">
      <h2 className="achievement-text">Things I've Built</h2>

      <div className="carousel-wrapper">
        <button onClick={handlePrev} disabled={page === 0} className="carousel-btn">
          &lt;
        </button>

        <div className="carousel-viewport">
          <div className="achievement-row">
            {visibleAchievements.map((achievement) => (
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
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="carousel-btn"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Achievements;
