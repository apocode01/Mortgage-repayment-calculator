import styles from "./CalculatorForm.module.scss"

function CalculatorForm() {
    return (
        <div className={styles.calculator_form_wrapper}>
            <div className={styles.calculator_header}>
                <h1 className={styles.calculator_title}>Mortgage Calculator</h1>
                <button className={styles.calculator_clear_btn}>
                    <span>Clear All</span>
                </button>
            </div>

            <form className={styles.calculator_form}>
                <div className={styles.form_field}>
                    <label className={styles.form_label} htmlFor="mortgage-amount">Mortgage Amount</label>
                    <div className={styles.input_wrapper}>
                        <span className={styles.input_symbol}>£</span>
                        <input type="number" id="mortgage-amount"></input>
                    </div>
                </div>

                <div className={styles.form_row}>
                    <div className={styles.form_field}>
                        <label className={styles.form_label} htmlFor="mortgage-term">Mortgage Term</label>
                        <div className={styles.input_wrapper}>
                            <input type="number" id="mortgage-term"></input>
                            <span className={styles.input_addon}>years</span>
                        </div>
                    </div>

                    <div className={styles.form_field}>
                        <label className={styles.form_label} htmlFor="interest-rate">Interest Rate</label>
                        <div className={styles.input_wrapper}>
                            <input type="number" id="interest-rate"></input>
                            <span className={styles.input_addon}>%</span>
                        </div>
                    </div>
                </div>

                <fieldset className={styles.form_fieldset}>
                    <legend className={styles.form_label}>Mortgage Type</legend>
                    <label className={styles.form_fieldset_radio_field}>
                        <input type="radio" id="repayment" name="mortgage-type" value="Repayment"/>
                        <span>Repayment</span>
                    </label>

                    <label className={styles.form_fieldset_radio_field}>
                        <input type="radio" id="interest-only" name="mortgage-type" value="Interest Only"/>
                        <span>Interest Only</span>
                    </label>
                </fieldset>

                <button className={styles.calculator_form_submit_btn} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg>
                    <span>Calculate Repayments</span>
                </button>
            </form>
        </div>
    );
}

export default CalculatorForm