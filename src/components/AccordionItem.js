import styles from "./AccordionItem.module.css";

function AccordionItem({ question, onSetCurrent, current }) {
  const isSelected = question?.id === current;

  return (
    <div className={styles.accordionItem}>
      <div
        className={`${styles.accordionTop} ${isSelected ? styles.active : ""}`}
        onClick={() => onSetCurrent(question.id)}
      >
        <h2>{question.title}</h2>
        <button>{isSelected ? "-" : "+"}</button>
      </div>
      <div className={`${styles.accordionBottom}`}>
        <span>{question.text}</span>
      </div>
    </div>
  );
}

export default AccordionItem;
