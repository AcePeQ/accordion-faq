import { useState } from "react";

import AccordionItem from "./AccordionItem";

import styles from "./Accordion.module.css";

const questionsInit = [
  {
    id: 1,
    title: `Question 1`,
    text: `t sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  },
  {
    id: 2,
    title: `Question 2`,
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,`,
  },
  {
    id: 3,
    title: `Question 3`,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
  },
];

function Accordion() {
  // Here we can even add button to add new FAQ questions by using setQuestions
  const [questions, setQuestions] = useState(questionsInit);
  const [current, setCurrent] = useState(null);

  function handleSetCurrent(id) {
    setCurrent((cur) => (cur === id ? null : id));
  }

  return (
    <div className={styles.accordion}>
      {questions.map((question) => (
        <AccordionItem
          question={question}
          key={question.id}
          onSetCurrent={handleSetCurrent}
          current={current}
        />
      ))}
    </div>
  );
}

export default Accordion;
