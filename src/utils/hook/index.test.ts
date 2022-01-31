import { hookMaxLength, hookMonth, hookOnlyNumber } from './index'

describe('hook', () => {
  describe('hookOnlyNumber', () => {
    it('넘겨받은 문자열의 숫자를 제외한 나머지를 제외한다.', () => {
      expect(hookOnlyNumber('sdsdsd')).toBe('');
      expect(hookOnlyNumber('1234')).toBe('1234');
      expect(hookOnlyNumber('123test')).toBe('123');
    })
  })

  describe('hookMonth', () => {
    it('넘겨받은 문자열을 1 ~ 12 로 제한한다.', () => {
      expect(hookMonth('12')).toBe('12');
      expect(hookMonth('123')).toBe('');
      expect(hookMonth('')).toBe('');
      expect(hookMonth('0')).toBe('');
    })
  })

  describe('hookMaxLen', () => {
    it('넘겨받은 문자열을 지정한 길이만큼 잘라서 반환한다.', () => {
      expect(hookMaxLength(4)('12345')).toBe('1234');
      expect(hookMaxLength(6)('1234567')).toBe('123456');
    })
  })
})