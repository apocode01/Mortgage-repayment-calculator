import CalculatorForm from "../CalculatorForm/CalculatorForm.jsx"
import ResultsPanel from "../ResultsPanel/ResultsPanel.jsx"
import styles from "./Card.module.scss"

function Card() {
    return (
        <div className={styles.card_wrapper}>
            <CalculatorForm/>
            <ResultsPanel/>
        </div>
    );
}

export default Card