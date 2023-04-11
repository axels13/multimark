import React, { useEffect, useState } from "react";
import "./Card.css";
import armchair from "../../assets/images/counter-timer-img.png";
const Card = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const deadline = new Date("April 20, 2023 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = deadline - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60)
      )
        .toString()
        .padStart(2, "0");

      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      if (timeDifference < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <section id="card">
      <article className="card__article">
        <div className="card__container">
          <div className="card__temporizador">
            <h5>Limited Offers</h5>
            <h3>Quality Armchair</h3>
            <div className="card__time">
              <div className="card__time_items">
                <p>{days} </p>
                <span>Days</span>
              </div>
              <div>
                <span>:</span>
              </div>
              <div className="card__time_items">
                <p>{hours} </p>
                <span>Hours</span>
              </div>
              <div>
                <span>:</span>
              </div>
              <div className="card__time_items">
                <p>{minutes} </p>
                <span>Minutes</span>
              </div>
              <div>
                <span>:</span>
              </div>
              <div className="card__time_items">
                <p>{seconds} </p>

                <span>Seconds</span>
              </div>
            </div>
            <div>
              <button className="card__btn">Visit Store</button>
            </div>
          </div>

          <div>
            <img src={armchair} alt="" className="card__img" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Card;
