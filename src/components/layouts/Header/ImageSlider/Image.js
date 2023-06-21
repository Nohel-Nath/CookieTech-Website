import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imageSlider.css";

import curve from "../../../../images/banner-curve-two.png";
import Button from "@mui/material/Button";
import round from "../../../../images/round-box.png";
import image2 from "../../../../images/content-image-2.png";
import image3 from "../../../../images/content-image-1.png";

import { motion, AnimatePresence } from "framer-motion";

const Image = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 5000); // Increase the duration to 10 seconds (10000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <div className="contain1">
        <AnimatePresence initial={false}>
          <Carousel
            interval={10000}
            selectedItem={activeIndex}
            showThumbs={false}
            showStatus={false}
            onSelect={handleSelect}
            infiniteLoop
            autoPlay
            animatePresence={true}
          >
            {activeIndex === 0 && (
              <div className="inner-contain">
                <div className="para">
                  <motion.p
                    className="lower-p"
                    key={activeIndex}
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 1 }}
                  >
                    IT Solutions For Easy Integration
                  </motion.p>
                  <h1 className="h1">
                    <strong>IT Services</strong>
                  </h1>
                  <h2>To Develop</h2>
                  <h3>Solutions Your Way!</h3>
                  <motion.h4
                    key={activeIndex}
                    initial={{ y: 250 }}
                    animate={{ y: 10 }}
                    transition={{ duration: 1.5 }}
                  >
                    Building a relationship between IT companies & experts
                  </motion.h4>

                  <motion.div
                    className="button1"
                    key={activeIndex}
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <Button className="large-button more-details">
                      More Details
                    </Button>
                    <Button className="large-button our-services">
                      Our Services
                    </Button>
                  </motion.div>
                  <div className="new">
                    <motion.img
                      src={round}
                      alt="1"
                      className="round"
                      key={activeIndex}
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 1.5 }}
                    />
                    <motion.img
                      src={image2}
                      alt="2"
                      className="image2"
                      key={activeIndex}
                      initial={{ x: 100 }}
                      animate={{ x: -10 }}
                      transition={{ duration: 2.5 }}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeIndex === 1 && (
              <div className="upper-contain">
                <div className="para1">
                  <motion.p
                    className="lower-p"
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 1 }}
                  >
                    IT Solutions For Easy Integration
                  </motion.p>
                  <h1 className="h5">
                    Deliver
                    <strong style={{ marginLeft: "13px", fontSize: "3.4rem" }}>
                      Innovative
                    </strong>
                  </h1>
                  <h1 className="h6">
                    <strong>It Solutions</strong>
                    <h
                      style={{
                        marginLeft: "33px",
                        fontSize: "3.4rem",
                        fontWeight: "400",
                      }}
                    >
                      For
                    </h>
                  </h1>
                  <h1
                    className="h7"
                    style={{
                      marginTop: "280px",
                      marginLeft: "-400px",
                      fontSize: "3.4rem",
                      fontWeight: "400",
                    }}
                  >
                    Technology Insights
                  </h1>
                  <motion.h
                    className="h8"
                    key={activeIndex}
                    initial={{ y: 250 }}
                    animate={{ y: 10 }}
                    transition={{ duration: 1.5 }}
                    style={{
                      marginTop: "365px",
                      marginLeft: "-475px",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    Building a relationship between IT companies & experts
                  </motion.h>
                  <motion.div
                    className="button1"
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Button
                      className="large-button more-details"
                      style={{ marginTop: "60px" }}
                    >
                      More Details
                    </Button>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5101/5101105.png"
                      alt="1"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginLeft: "-157px",
                        marginTop: "75px",
                      }}
                    />
                    <h
                      className="h8"
                      style={{
                        color: "#4a3d8f",
                        marginTop: "-64px",
                        marginLeft: "220px",
                      }}
                    >
                      Watch The Demo
                    </h>
                  </motion.div>
                  <div className="new1">
                    <motion.img
                      src={round}
                      alt="3"
                      key={activeIndex}
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 1.5 }}
                    />
                    <motion.img
                      src={image3}
                      alt="4"
                      key={activeIndex}
                      initial={{ x: 100 }}
                      animate={{ x: -10 }}
                      transition={{ duration: 2.5 }}
                      style={{ height: "100%", marginTop: "-540px" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </Carousel>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Image;
