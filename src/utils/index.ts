export * from './validation';
export * from './cardUtil';

export const isNotLastElement = (elIndex: number, array: any[]) => {
  if (elIndex === array.length - 1) {
    return false;
  }
  return true;
};

export const isNotEmpty = (value: any) => value.length !== '';

export const focusOnNextRequiredInput = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
  const { target } = changeEvent;
  const form = target.form;
  const requiredElements = Array.prototype.filter.call(form?.elements, (el) => el.required);
  const index = Array.prototype.indexOf.call(requiredElements, target);
  if (isNotEmpty(target.value) && isNotLastElement(index, requiredElements)) {
    (requiredElements[index + 1] as HTMLElement).focus();
  }
};

export const getErrorMsgByType = (type: string) => {
  let errorMsg;
  switch (type) {
    case 'cardNumber':
      errorMsg = '잘못된 카드번호 입니다.';
      break;
    case 'cardExpire':
      errorMsg = '잘못된 만료일 입니다.';
      break;
    case 'cardCvcNumber':
      errorMsg = '잘못된 보안코드 입니다.';
      break;
    case 'cardPassword':
      errorMsg = '잘못된 비밀번호 입니다.';
      break;
    default:
      break;
  }
  return errorMsg;
};
