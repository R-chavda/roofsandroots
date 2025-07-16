import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Hero = () => {
  const [filter, setFilter] = useState("");

  return (
    <section className="hero-wrapper">
      <div
        className="paddings innerWidth flexCenter hero-container"
        id="hero-container"
      >
        {/* left side */}
        <div className="flexColStart hero-left" id="hero-left">
          {/* title */}
          <div className="hero-title" id="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover <br />
              Most Suitable
              <br /> Roofs
            </motion.h1>
          </div>
          <div
            className="flexColStart secondaryText flexhero-des"
            id="hero-desc-text"
          >
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar filter={filter} setFilter={setFilter} />

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={250} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={60} duration={3} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
