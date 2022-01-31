import { isRequire } from './index';

describe('validator', () => {
  describe('isRequire', () => {
    it('넘겨받은 값이 존재한디면 true, 아니면 false 를 리턴한다.', () => {

      expect(isRequire('aaa')).toBe(true);

      expect(isRequire('')).toBe(false)
    })
  })
})