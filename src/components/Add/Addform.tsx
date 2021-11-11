import { useState } from "react";

import { isValidImg, isValidString, isValidLoves, isValidFavFood, isValidAge } from "./validation";

const Addform = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [loves, setLoves] = useState('');
    const [favFood, setFavFood] = useState('');
    const [img, setImg] = useState('');
    const [games, setGames] = useState<number>(0);
    const [wins, setWins] = useState<number>(0);
    const [defeats, setDefeats] = useState<number>(0);
  
    const [nameIsTouched, setNameIsTouched] = useState<boolean>(false);
    const [ageIsTouched, setAgeIsTouched] = useState<boolean>(false);
    const [lovesIsTouched, setLovesIsTouched] = useState<boolean>(false);
    const [favFoodIsTouched, setFavFoodIsTouched] = useState<boolean>(false);
    const [imgNameIsTouched, setImgNameIsTouched] = useState<boolean>(false);
    

    const ageIsValid = isValidAge(age);
    const nameIsValid = isValidString(name);
    const lovesIsValid = isValidLoves(loves);
    const favFoodIsValid = isValidFavFood(favFood);
    const imgIsValid = isValidImg(img);
    
    
    const ageClass = ageIsValid && ageIsTouched ? 'valid' : ageIsTouched ? 'invalid' : '';
    const nameClass = nameIsValid && nameIsTouched ? 'valid' : nameIsTouched ? 'invalid' : '';
    const lovesClass = lovesIsValid && lovesIsTouched ? 'valid' : lovesIsTouched ? 'invalid' : '';
    const favFoodClass = favFoodIsValid && favFoodIsTouched ? 'valid' : favFoodIsTouched ? 'invalid' : '';
    const imgClass = imgIsValid && imgNameIsTouched ? 'valid' : imgNameIsTouched ? 'invalid' : '';
    
    const formIsValid = nameIsValid && ageIsValid && lovesIsValid && favFoodIsValid;

    const hamsterUploadHandler = async () => {
      let addHamster = { 
          name: name, 
          age: age, 
          loves: loves, 
          favFood: favFood, 
          wins: wins, 
          defeats: defeats, 
          games: games, 
          imgName: img 
      }
      await fetch('/hamsters', {
          method: 'POST',
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(addHamster)
      })
       const response = await fetch('/hamsters', 
                {method: 'GET', headers: { 'Content-Type' : 'application/json'}})
        const hamsterData = await response.json() 
        console.log (hamsterData)
      };



    return (
        <>
      <form className="form-container">
        <p> add new hamster </p>
        <input type="text" 
                placeholder="name"
                value={name}
                className={nameClass}
                onChange={e => setName(e.target.value)}
                onClick={() => setNameIsTouched(true)}
        />  
        
        <input type="text" 
                placeholder="age"
                value={age}
                className={ageClass}
                onChange={e => setAge( Number(e.target.value) )}
                onClick={() => setAgeIsTouched(true)}
        />
        <input type="text" 
                placeholder="love"
                value={loves}
                className={lovesClass}
                onChange={e => setLoves(e.target.value)}
                onClick={() => setLovesIsTouched(true)}
        />
        <input type="text" 
                placeholder="favFood"
                value={favFood}
                className={favFoodClass}
                onChange={e => setFavFood(e.target.value)}
                onClick={() => setFavFoodIsTouched(true)}
        />
        <input type="file"
                placeholder="upload hamster image..."
                onChange={e => setImg(e.target.value)}
                onClick={() => setImgNameIsTouched(true)}
                className={imgClass}
        /> 
        <button className="add-btn" disabled={!formIsValid} onClick={hamsterUploadHandler}> add new hamster </button>
      </form>
    </>
  );
};

export default Addform;
