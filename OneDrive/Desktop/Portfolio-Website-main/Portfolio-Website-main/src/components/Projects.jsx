import React from "react";
import Project from "./Cards/Project";

export const projects = [
  {
    title: "Credit Card Fraud Detection",
    stack: "Python, Machine Learning(Numpy, Panda), Matplotlib",
    date: "Jul. 2023",
    detail: 
      "Developed a data based algorithm for ditecting frauds in credit cards in Python, getting A+ marks at University of Engineering and Management in 2023. Implemented libararies like Numpy, Pandas to get the most accurate results.",
    link: "https://github.com/Devang-sharmaa", // Add your project link here
  },
  {
    title: "Anime Searcher",
    stack: "Python, Tkinter, Pillow",
    date: "Nov. 2022",
    detail: "Developed a CNN-based deep learning model to classify satellite images into categories like Cloudy, Desert, and Water. Implemented data preprocessing, augmentation, and trained the model, evaluating its performance using accuracy and loss metrics.",
    link: "https://github.com/Devang-sharmaa", // Add your project link here
  },
  {
    title: "Parkinson's Diease Detection",
    stack: "python, Keras, Scikit-learn, Matplotlib, Numpy, Pandas",
    detail:
      "A clone of the Medium homepage made using ReactJS and TailwindCSS. Implemented interactive components including Radix UI’s Accordion for collapsible sections with smooth transitions, Lenis for smooth scrolling, and Framer Motion for dynamic typing animations.",
    date: "Apr. 2024",
    link: "https://github.com/Devang-sharmaa", // Add your project link here
  },
  {
    title: "MCU Timeline",
    stack: "JavaScript, HTML, CSS",
    detail:
      "A responsive website to view upcoming Marvel Cinematic Universe films and series. Implemented functions to detect the user’s browser, operating system, and device type, and dynamically adjust the user experience based on these factors.",
    date: "Apr. 2024",
    link: "https://github.com/Devang-sharmaa", // Add your project link here
  },
  {
    title: "Microsoft Stock Price Prediction",
    stack: "Python, TensorFlow, Keras, Pandas, Matplotlib, Scikit-learn, NumPy",
    date: "Mar. 2024",
    detail: `
      Utilized Long Short-Term Memory (LSTM) neural networks to predict the closing prices of Microsoft stock.
      Preprocessed historical stock data, built and trained the LSTM model, and evaluated its accuracy in predicting future stock prices.
    `,
    link: "https://github.com/tawsifrm/msft-stock-prediction-lstm", // Add your project link here
  },
  {
    title: "Javascript Pacman",
    stack: "JavaScript, HTML, CSS",
    detail:
      "Developed a classic arcade-style Pac-Man game using pure JavaScript. Implemented character movement, collision detection, scoring, and game state management using DOM manipulation, event handling, timeouts, arrays, and array methods for game logic.",
    date: "Feb. 2024",
    link: "https://github.com/Devang-sharmaa", // Add your project link here
  },
  
  {
    title: "SuperTyper - Typing Game",
    stack: "JavaScript, HTML, CSS",
    detail:
      "Developed a fun and challenging typing game where you can enhance your typing skills. Used HTML, CSS, and JavaScript to create an engaging and responsive user interface, real-time feedback, and dynamic game logic.",
    date: "Dec. 2023",
    link: "https://github.com/Devang-sharmaa", // Add your project link here
  },
];

export default function Projects() {
  return (
    <>
      {projects.map(({ title, stack, detail, date, link }) => (
        <Project
          key={title}
          title={title}
          stack={stack}
          detail={detail}
          date={date}
          link={link}
        />
      ))}
    </>
  );
}
