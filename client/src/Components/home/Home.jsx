import React, { createRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AboutUs from "../about/AboutUs";
import NavBar from "../navbar/NavBar";
import styles from "./home.module.css";
import "./indicators.css";
import Contact from "../contact/Contact";

const Home = () => {
  const [index, setIndex] = useState(0);
  const year = new Date().getFullYear();
  const slideRef = createRef();
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">•</div>,
  };
  const slideImages = [
    "https://images.unsplash.com/photo-1601059286024-61032e83b203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
  ];
  
  const sections = [
    {
      name: "ABOUT US",
      content: <AboutUs />,
    },
    {
      name: "CONTACT",
      content: <Contact />,
    },
  ];

  return (
    <main className={styles.page}>
      <NavBar />
      <section className={styles.image_slider}>
        <Slide ref={slideRef} {...properties}>
          {slideImages.map((each, index) => (
            <div key={index} className={styles.each_slide}>
              <img className={styles.lazy} src={each} alt="sample" />
            </div>
          ))}
        </Slide>
      </section>

      <section className={styles.body}>
        <ul className={styles.content_title}>
          {sections.length !== 0 &&
            sections.map((section, index) => {
              return (
                <li
                  key={index}
                  className={styles.title}
                  onClick={() => setIndex(index)}
                >
                  {section.name}
                </li>
              );
            })}
        </ul>
        <section className={styles.content}>{sections[index].content}</section>
        <div
          dangerouslySetInnerHTML={{ __html: `&copy ${year} Copyright` }}
        ></div>
      </section>
    </main>
  );
};

export default Home;
