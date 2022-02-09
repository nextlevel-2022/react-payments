
### 웹 VS CODE 환경
[바로가기](https://github.com/guymoon/react-payments/tree/guymoon---step1)

# 0. 처음 시도한 것들 
- jest
- react-testing-library
- ts(이전에는 ts로 작성된 프로젝트를 수정하는 것 밖에 해보지 못함)
- forwardRef
- portals

# 1.고민한 내용

## 1.1.카드 등록 검증 함수
```js
export const validateNewCard = (newCard: {
  number: CardNumber;
  cvc: string;
  password: CardPassword;
  expiredDate: CardExpiredDate;
  cardCompany: CardCompany;
}): void => {
  const { number, expiredDate, cvc, password } = newCard;

  const isValidCardNumberLength = Object.values(number).every(
    (quarterCardNumber) => quarterCardNumber.length === 4,
  );

  const month = Number(expiredDate.month);
  const year = Number(expiredDate.year);

  const isValidExpiredMonth = month >= 1 && month <= 12;
  const isValidExpiredYear = year >= 10 && year <= 50;

  const isValidCvc = cvc.length === CARD_MAX_LENGTH.CVC;

  const isValidPassword = Object.values(password).every((onePassword) => onePassword.length === 1);

  const hasCompany = cardCompany.length > 0;

  if (!isValidCardNumberLength) throw new Error(NEW_CARD_ERROR_MESSAGE.NUMBER);
  if (!isValidExpiredMonth) throw new Error(NEW_CARD_ERROR_MESSAGE.EXPIRED_MONTH);
  if (!isValidExpiredYear) throw new Error(NEW_CARD_ERROR_MESSAGE.EXPIRED_YEAR);
  if (!isValidCvc) throw new Error(NEW_CARD_ERROR_MESSAGE.CVC);
  if (!isValidPassword) throw new Error(NEW_CARD_ERROR_MESSAGE.PASSWORD);
  if (!hasCompany) {
    setIsOpenModal(true);
    throw new Error(NEW_CARD_ERROR_MESSAGE.COMPANY);
  }
};
```
새로운 카드를 등록하려고 했을 때(정보를 입력하고 다음 버튼을 누른 후) 등록될 카드에 대한 검증을 해야만 했습니다. 그래서 위와 같은 함수를 작성했는데 여기서 궁금한 점이 생겼습니다.
### 가독성? 메모리? 오버엔지니어링? 
위에 함수 내부에서 검증 과정에서 가독성을 얻고자 isValidCardNumberLength, isValidExpiredMonth 등과 같은 불리언 변수를 만들고, 맨 아래에서 이 값들을 이용해 상황에 맞는 적절한 에러를 던져주었습니다. 그런데 이 작업이 과연 적절했는가에 대한 의문이 생겼습니다. 부적절 할 수 있다고 생각한 이유는 다음과 같습니다.
- `is~`와 같은 변수 선언 없이 `if(A){throw Error(에러메시지}` 로 할 경우 에러 메시지에서 A를 설명 할 수 있지 않을까 싶었습니다. 
- 변수 선언 자체도 메모리 
- 저렇게 작업하므로써 validateNewCard 함수의 코드 라인이 길어짐 

위와 같은 이유에도 불구하고, 우선 가독성을 얻어보자 생각해 수정하지 않았습니다. 그리고 다른 대안을 생각해봤습니다.
- 유틸 함수로 분리 `is~~` 작업을 유틸 함수로 분리하고, 함수 내부에서는 유틸 함수들만을 이용해 error를 throw
- 그냥 `if(A){throw new Error(에러메시지)}`

리뷰어님께 어떤 방법을 선호하시는지 여쭤보고 싶습니다. 
 
## 1.2. input change 핸들러의 위치와 통일 여부
저는 우선 카드 번호, 만료일 등과 같은 input에 대한 change 핸들러를 useCardForm 이라는 커스텀훅 분리해 만들었습니다. 
```ts
export default function useCardForm() {
  const [cardNumber, setCardNumber] = useState<CardNumber>({});
  const [password, setPassword] = useState<CardPassword>({});
  const [expiredDate, setExpiredDate] = useState<CardExpiredDate>({});
  const [holderName, setHolderName] = useState<Card['holderName']>('');
  const [cvc, setCvc] = useState<Card['cvc']>('');

  const onChangeCardNumbers = {};
  const onChangeExpiredDate = {};
  const onChangeCardHolderName = {};
```
### 1.2.1 change 핸들러 하나로 통일?
통일 시킬 수는 있었으나 `onChange~` 핸들러를 각각 따로 지정해주었습니다. 왜냐하면 파라미터가 너무 많아지고, 내부 구조를 정확히 알아야지만 사용 할 수 있는 어려운 `onChange~`가 될 것 같았습니다. 그래서 각각 따로 지정해줬습니다. 리뷰어님은 `onChange~` 들을 하나로 통일 시킬 수 있다면 통일 시키는 것이 좋다고 생각하시는 궁급합니다!

### 1.2.2. 커스텀 훅에서 분리하는 것이 맞을까? 
커스텀 훅으로 분리하였으나 재사용은 불가능 합니다. 지금까지 저는 재사용 할 수 없으면 change 핸들러는 사용하는 쪽에서 가장 가까운 곳에 위치하는 것이 좋다고 생각했습니다. 그러나 이번에는 아래와 같은 이유로 분리했습니다. 
- 전역 상태 관리가 불가능해 어차피 페이지 컴포넌트에서 state를 선언하고, 자식 컴포넌트로 props로 내려줘야 한다. 따라서 사용하는 컴포넌트에서 선언해 사용 할 수 없다.
- 그러므로 관련 로직을 하나의 커스텀 훅으로 분리해 커스텀 훅 내부에서만 onChange 관련 로직을 다룬다. 
그럼에도 불구하고 재사용 가능하지 않으므로 커스텀 훅 분리가 의미있는지 궁금합니다!

## 1.3. 테스트를 위해 파라미터를 항상 만들어야 할까?
이번에 처음에는 `validateNewCard()` 함수를 만들 때 파라미터를 받지 않도록 만들었습니다. 왜냐하면 직접 참조 할 수 있는 상태들이 존재했기 때문에 파라미터 없이도 작업 할 수 있었기 때문입니다. 그리고 파라미터가 없다면 좀 더 편하게 함수를 사용 할 수 있다고 생각했습니다. 그러나 문제는 테스트를 하려고 할 때 발생했습니다. 테스트를 하려고하니 파라미터가 없어 테스트 할 수 없었습니다ㅜㅜ 테스트를 가능한 함수를 위해서는 항상 파라미터로 값을 받도록 작성하는 습관을 길러야 할까요? 저는 파라미터가 없으면 좀 더 내부 구조 신경 안 쓰고 편리하게 사용 할 수 있다고 생각했습니다. 그래서 만약 재사용 할 것이 아니라면 분리하는 것 보다는 사용하는 곳 가장 가까운 곳에서 정의되면 좋다고 생각했습니다. 리뷰어님의 의견이 궁금합니다!! 

# 2. 느낀점
- onChange 관련 로직에서 유효성 검사를 하지 말자. 유효성 검사를 onChange 부분에서 하니 유효성 관련 로직을 테스트하기 어렵다.
- 검증로직을 담고 있는 함수(validateNewCard)에서 검증 부분 외 다른 로직을 담지 말자 
  - validateNewCard에서 만약 카드 회사가 선택되지 않았다면 `setOpenCardCompanyModal`을 해줬다. 그러나 검증 과정을 테스트하는 과정에서 모달 관련 로직이 들어있어 테스트하기 어려웠다. 그래서 분리했고, 좀 더 `validate~` 라는 네이밍에 맞는 함수를 만들 수 있었다. 
- 테스트를 작성하자. 지금까지 테스트는 정말 잘 동작하는지 테스트하기 위해서만 작성하는 것이라 생각했다. 그러나 테스트를 작성하면서 테스트 가능한 함수(좀 더 단일 책임 원칙에 맞는 함수)를 만드는 경험을 했다. 

