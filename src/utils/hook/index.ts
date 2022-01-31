export const hookOnlyNumber = (value: string) => {
  return value.replace(/[^0-9]/gi, '');
}

export const hookMonth = (value: string) => {
  const month = parseInt(value, 10);

  if (!value) {
    return ''
  }

  return !(month >= 1 && month <= 12) ? '' : String(month);
}

export const hookMaxLength = (max: number) => (value: string) => value.substring(0, max);