import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0)

    const ageIsValid = isValidAge(age)
    const nameIsValid = isValidName(name)
    const formIsValid = nameIsValid && isValidAge
    
    return (
        <>
      <form className="form-container">
        <input type="text" 
                placeholder="search hamster..."
                className={nameIsValid ? 'valid' : 'invalid'}
                onChange={e => setName(e.target.value)}
        />
        <input type="text" 
                placeholder="search age"
                className={ageIsValid ? 'valid' : 'invalid'}
                onChange={e => setAge( Number(e.target.value) )}
        />
        <button disabled={!formIsValid}> Search </button>
      </form>
    </>
  );
};

const isValidName = (name: string):boolean => {
    return name.length >= 2
};
const isValidAge = (age: number):boolean => {
    if( age < 0 ) return false
    let ageString = String(age)
    if( ageString.includes(',') || ageString.includes('.') ) return false
    return true
};

export default Form;
