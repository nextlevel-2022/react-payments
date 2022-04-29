import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardRegistration from '../components/CardRegistration';
import { TEST_ID } from '../constants';

function renderCardRegistration() {
  const result = render(<CardRegistration />);

  const CardNumberInputs = () => result.getAllByTestId(TEST_ID.CARD_NUMBER_INPUTS);
  const CardExpiredDateInputs = () => result.getAllByTestId(TEST_ID.CARD_EXPIRED_DATE_INPUTS);
  const CardHolderInput = () => result.getByTestId(TEST_ID.CARD_HOLDER_NAME_INPUT);
  const CardCvcInputs = () => result.getByTestId(TEST_ID.CARD_CVC_INPUT);
  const CardPasswordInputs = () => result.getAllByTestId(TEST_ID.CARD_PASSWORD_INPUTS);

  const CompanySelectModal = () => result.getByTestId(TEST_ID.COMPANY_SELECT_MODAL);

  const GoNextButton = () => result.getByText('다음');

  function clickGoNextButton() {
    userEvent.click(GoNextButton());
  }

  function typeCardNumbers(index: 0 | 1 | 2 | 3, cardNumber: string) {
    userEvent.type(CardNumberInputs()[index], cardNumber);
  }

  function typeCardExpiredMonth(expiredMonth: string) {
    userEvent.type(CardExpiredDateInputs()[0], expiredMonth);
  }

  function typeCardExpiredYear(expiredDYear: string) {
    userEvent.type(CardExpiredDateInputs()[1], expiredDYear);
  }

  function typeCardHolderName(holderName: string) {
    userEvent.type(CardHolderInput(), holderName);
  }

  function typeCardCvc(cvc: string) {
    userEvent.type(CardCvcInputs(), cvc);
  }

  function typeFirstPassword(password: string) {
    userEvent.type(CardPasswordInputs()[0], password);
  }

  function typePassword(index: number, password: string) {
    userEvent.type(CardPasswordInputs()[index], password);
  }

  return {
    CardNumberInputs,
    CardExpiredDateInputs,
    CardHolderInput,
    CardCvcInputs,
    CardPasswordInputs,
    typeCardNumbers,
    CompanySelectModal,
    typeCardExpiredMonth,
    typeCardExpiredYear,
    typeCardHolderName,
    typeCardCvc,
    typeFirstPassword,
    GoNextButton,
  };
}

describe('현재 입력중인 input에 입력을 마치면, 자동으로 다음 입력을 받기위해 다음 input으로 포커스 된다.', () => {
  it('초기에 카드 번호, 만료일, 소유자 이름, CVC, 비밀번호 입력 받는 input 들과 다음 버튼이 보인다.', () => {
    const {
      CardNumberInputs,
      CardExpiredDateInputs,
      CardHolderInput,
      CardCvcInputs,
      CardPasswordInputs,
      GoNextButton,
    } = renderCardRegistration();

    expect(CardNumberInputs()).toHaveLength(4);
    expect(CardExpiredDateInputs()).toHaveLength(2);
    expect(CardHolderInput()).toBeVisible();
    expect(CardCvcInputs()).toBeVisible();
    expect(CardPasswordInputs()).toHaveLength(2);
    expect(GoNextButton()).toBeVisible();
  });

  it('카드숫자 4개 입력하면 다음 칸으로 포커스 되고, 마지막 칸이 입력되면 만료 일 입력부분으로 포커스 된다.', () => {
    const { CardNumberInputs, CardExpiredDateInputs, typeCardNumbers } = renderCardRegistration();

    typeCardNumbers(0, '1234');
    expect(CardNumberInputs()[1]).toHaveFocus();

    typeCardNumbers(1, '1234');
    expect(CardNumberInputs()[2]).toHaveFocus();
    // expect(CompanySelectModal()).toBeVisible(); //?

    typeCardNumbers(2, '1234');
    expect(CardNumberInputs()[3]).toHaveFocus();

    typeCardNumbers(3, '1234');
    expect(CardExpiredDateInputs()[0]).toHaveFocus();
  });

  it('만료 월을 입력하면 만료 년으로, 만료 년을 입력하면 홀더 입력하는 부분으로 포커스 된다.', () => {
    const { CardExpiredDateInputs, CardHolderInput, typeCardExpiredMonth, typeCardExpiredYear } =
      renderCardRegistration();

    typeCardExpiredMonth('10');
    expect(CardExpiredDateInputs()[1]).toHaveFocus();

    typeCardExpiredYear('23');
    expect(CardHolderInput()).toHaveFocus();
  });

  it('카드홀더 이름 입력하면(10자리) CVC 입력화면으로 포커스 된다.', () => {
    const { CardCvcInputs, typeCardHolderName } = renderCardRegistration();

    typeCardHolderName('123456789*');
    expect(CardCvcInputs()).toHaveFocus();
  });

  it('CVC 3개 모두 입력하면 비밀번호 입력으로 포커스된다.', () => {
    const { CardPasswordInputs, typeCardCvc } = renderCardRegistration();

    typeCardCvc('123');
    expect(CardPasswordInputs()[0]).toHaveFocus();
  });

  it('비밀번호 하나 입력하면 다음 칸으로 포커스된다.', () => {
    const { CardPasswordInputs, typeFirstPassword } = renderCardRegistration();

    typeFirstPassword('1');
    expect(CardPasswordInputs()[1]).toHaveFocus();
  });
});
