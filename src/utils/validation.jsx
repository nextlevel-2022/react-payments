export const isValid = {
  enoughLength: (e, inputLength) => {
    return e.target.value.length === inputLength 
  },
  isNumber: (e) => {
    console.log('value',e.target.value);
    console.log('vN',e.target.valueAsNumber);
    return Number.isInteger(Number(e.target.value));
  },
  expirationMonth: (e) => {
    const month = e.target.valueAsNumber;
    return month >= 1 && month <= 12 ? true : false;
  },
  expirationYear: (e) => {
    const year = e.target.valueAsNumber;
    return year >= 0 && year <= 99 ? true : false;
  }
};
