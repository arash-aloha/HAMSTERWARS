function isValidImg(imgName: string): boolean {
    if (  imgName.length <= 7 
      || !imgName.endsWith('.jpg')
      || !imgName.endsWith('.png')
      || !imgName.endsWith('.svg')
      || !imgName.endsWith('.jpeg')
    ) { return false
  } return true
  };
  
  const isValidString = (name: string):boolean => {
      return name.length >= 2
  };
  const isValidLoves = (loves:string):boolean => {
      return loves.length >= 2
  };
  const isValidFavFood = (favFood:string):boolean => {
      return favFood.length >= 2
  };
  const isValidAge = (age: number):boolean => {
      if( age < 0 ) return false
      if(!Number.isInteger(age) ) return false
      return true
  };

  export { isValidImg, isValidString, isValidLoves, isValidFavFood, isValidAge }