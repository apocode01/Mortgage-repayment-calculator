import styles from "./CalculatorForm.module.scss"

function CalculatorForm() {
    return (
        <div className={styles.calculator_form_wrapper}>
            <div>
                <h1>Mortgage Calculator</h1>
                <span>Clear All</span>
            </div>

            <form>
                <label htmlFor="mortgage-amount">Mortgage Amount</label>
                <input type="number" id="mortgage-amount"></input>

                <label htmlFor="mortgage-term">Mortgage Term</label>
                <input type="number" id="mortgage-term"></input>

                <label htmlFor="mortgage-rate">Interest Rate</label>
                <input type="number" id="mortgage-rate"></input>

                <fieldset>
                    <legend>Mortgage Type</legend>
                    <input type="radio" id="repayment" name="mortgage-type" value="Repayment"/>
                    <label htmlFor="repayment">Repayment</label>
                    <input type="radio" id="interest-only" name="mortgage-type" value="Interest Only"/>
                    <label htmlFor="interest-only">Interest Only</label>
                </fieldset>

                <button type="submit">Calculate Repayments</button>
            </form>
        </div>
    );
}

export default CalculatorForm