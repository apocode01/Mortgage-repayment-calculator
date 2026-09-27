import {useState} from "react";
import CalculatorForm from "../CalculatorForm/CalculatorForm.jsx"
import ResultsPanel from "../ResultsPanel/ResultsPanel.jsx"
import styles from "./Card.module.scss"

function Card() {

    const [mortgageAmount, setMortgageAmount] = useState('');
    const [mortgageTerm, setMortgageTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [mortgageType, setMortgageType] = useState('');
    const [formFilled, setFormFilled] = useState(false);
    const [errors, setErrors] = useState({
        mortgageAmount: '',
        mortgageTerm: '',
        interestRate: '',
        mortgageType: '',
    });
    const [calculatedValues, setCalculatedValues] = useState({
        mortgageAmount: '',
        mortgageTerm: '',
        interestRate: '',
        mortgageType: '',
    });

    const handleClear = () => {
        setMortgageAmount('');
        setMortgageTerm('');
        setInterestRate('');
        setMortgageType('');
        setFormFilled(false);

        setErrors({
            mortgageAmount: '',
            mortgageTerm: '',
            interestRate: '',
            mortgageType: '',
        });
    };

    const handleMortgageAmount = (e) => {
        setMortgageAmount(e.target.value);
    }

    const handleMortgageTerm = (e) => {
        setMortgageTerm(e.target.value);
    }

    const handleInterestRate = (e) => {
        setInterestRate(e.target.value);
    }

    const handleMortgageType = (e) => {
        setMortgageType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        // Validate if the input is not empty
        if (!mortgageAmount.trim()) {
            setErrors(prev => ({...prev, mortgageAmount: 'This field is required'}));
            hasError = true;
        } 
        else if (Number(mortgageAmount) <= 0) {
            setErrors(prev => ({...prev, mortgageAmount: 'Please enter a value greater than 0'}));
            hasError = true;
        }
        else {
            setErrors(prev => ({...prev, mortgageAmount: ''}));
        }

        // Validate if the input is not empty
        if (!mortgageTerm.trim()) {
            setErrors(prev => ({...prev, mortgageTerm: 'This field is required'}));
            hasError = true;
        } 
        else if (Number(mortgageTerm) <= 0) {
            setErrors(prev => ({...prev, mortgageTerm: 'Please enter a value greater than 0'}));
            hasError = true;
        }
        else {
            setErrors(prev => ({...prev, mortgageTerm: ''}));
        }

        // Validate if the input is not empty
        if (!interestRate.trim()) {
            setErrors(prev => ({...prev, interestRate: 'This field is required'}));
            hasError = true;
        } 
        else if (Number(interestRate) < 0 || Number(interestRate) > 100) {
            setErrors(prev => ({...prev, interestRate: 'Please enter a value between 0 and 100'}));
            hasError = true;
        }
        else {
            setErrors(prev => ({...prev, interestRate: ''}));
        }

        if (!mortgageType) {
            setErrors(prev => ({...prev, mortgageType: 'This field is required'}));
            hasError = true;
        }
        else {
            setErrors(prev => ({...prev, mortgageType: ''}));
        }

        if (hasError) {
            return;
        }

        setCalculatedValues({
            mortgageAmount: mortgageAmount,
            mortgageTerm: mortgageTerm,
            interestRate: interestRate,
            mortgageType: mortgageType,
        });
        setFormFilled(true);
    };

    return (
        <div className={styles.card_wrapper}>
            <CalculatorForm 
                handleClear={handleClear}
                mortgageAmount={mortgageAmount} 
                mortgageTerm={mortgageTerm} 
                interestRate={interestRate}
                mortgageType={mortgageType}  
                errors={errors}              
                handleMortgageAmount={handleMortgageAmount}
                handleMortgageTerm={handleMortgageTerm}
                handleInterestRate={handleInterestRate}
                handleMortgageType={handleMortgageType}
                handleSubmit={handleSubmit}
            />
            <ResultsPanel 
                calculatedValues={calculatedValues} 
                formFilled={formFilled}
            />
        </div>
    );
}

export default Card