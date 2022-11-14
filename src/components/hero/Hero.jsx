import React, { useEffect } from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Beautify believes in championing all beauty, living with courage,
            and standing fearlessly together to celebrate our differences
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        {/* hero blue circle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={{
            type: "spring",
            duration: 3,
          }}
          className={css.blueCircle}
        ></motion.div>
        {/* Hero img */}
        <motion.img
          /* initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }} */
          transition={{
            type: "spring",
            duration: 3,
          }}
          src={HeroImg}
          alt="a woman"
          width={600}
        />

        {/* cart div animation */}
        <motion.div
          initial={{ right: "2rem" }}
          whileInView={{ right: "-3rem" }}
          transition={{
            type: "spring",
            duration: 3,
          }}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy customers</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
