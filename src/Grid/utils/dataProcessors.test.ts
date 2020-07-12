import { fullTime } from './dataProcessors';

describe('dataProcessors', () => {
  describe('fullTime', () => {
    it('returns empty string if date is undefined', () => {
      expect(fullTime()).toBe('');
    });

    it("returns '06.07.2020 01:46:40' if date is 1594000000", () => {
      expect(fullTime(1594000000)).toBe('06.07.2020 01:46:40');
    });

    it("returns '24.05.2020 14:59:12' if date is '24.05.2020 14:59:12'", () => {
      expect(fullTime('2020-05-24T14:59:12.609Z')).toBe('24.05.2020 14:59:12');
    });
  });
});
