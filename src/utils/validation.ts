export const isStringInputed = (value: string) => {
  const regex = /[a-zA-Z]/;
  if (regex.test(value)) {
    return true;
  }
  return false;
};

export const isIndividualCardNumberInputValid = (value: string) => {
  const regex = /[0-9]{4}/;
  if (regex.test(value)) {
    return true;
  }
  return false;
};

export const isTotalCardNumberValid = (value: string) => {
  const regex = /[0-9]{16}/;
  if (regex.test(value)) {
    return true;
  }
  return false;
};

export const isCvcValid = (value: string) => {
  const regex = /[0-9]{3}/;
  if (regex.test(value)) {
    return true;
  }
  return false;
};

export const isMonthValid = (value: string) => {
  const regex = /[0-9]{2}/;
  if (regex.test(value) && 1 <= +value && +value <= 12) {
    return true;
  }
  return false;
};

export const isYearValid = (value: string) => {
  const regex = /[0-9]{2}/;
  if (regex.test(value) && +value <= 99) {
    return true;
  }
  return false;
};

export const isPasswordValid = (value: string) => {
  const regex = /[0-9]{1}/;
  if (regex.test(value)) {
    return true;
  }
  return false;
};
