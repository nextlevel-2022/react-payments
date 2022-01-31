import { reducer } from "./reducer";
import { changeInput } from "./action";

describe('reducer', () => {
  describe('changeInput', () => {
    it('name 과 value 를 받아 해당 값이 적용된 새로운 state 를 반환한다.', () => {
      const prevState = {
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      }

      const newState = reducer(prevState, changeInput('cardNumber0', '1234'))

      expect(newState).toEqual({
        card: {
          cardNumber0: '1234',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      })
    })

    it('카드 번호는 숫자만 입력된다.', () => {
      const prevState = {
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      }

      const newState = reducer(prevState, changeInput('cardNumber0', '12test'))

      expect(newState).toEqual({
        card: {
          cardNumber0: '12',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      })
    })

    it.each([['123', ''], ['12', '12']])('만료월의 경우 1 ~ 12 만 입력된다. %s 인 경우 %s 를 반환한다.', (mm, result) => {
      const prevState = {
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      }

      const newState = reducer(prevState, changeInput('mm', mm))

      expect(newState).toEqual({
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: result,
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      })
    })

    it('cvc 는 숫자만 입력 가능하다', () => {
      const prevState = {
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      }

      const newState = reducer(prevState, changeInput('cvc', '12test'))

      expect(newState).toEqual({
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '12',
          password0: '',
          password1: '',
        },
        cards: [],
      })
    })

    it('키드 소유자 이름의 경우 30자만 입력 가능하다.', () => {
      const prevState = {
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: '',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      }

      const newState = reducer(prevState, changeInput('owner', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'))

      expect(newState).toEqual({
        card: {
          cardNumber0: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          mm: '',
          yy: '',
          owner: 'Lorem Ipsum is simply dummy te',
          cvc: '',
          password0: '',
          password1: '',
        },
        cards: [],
      })
    })
  })
})