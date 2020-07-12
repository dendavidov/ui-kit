"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataProcessors_1 = require("./dataProcessors");
describe('dataProcessors', function () {
    describe('fullTime', function () {
        it('returns empty string if date is undefined', function () {
            expect(dataProcessors_1.fullTime()).toBe('');
        });
        it("returns '06.07.2020 01:46:40' if date is 1594000000", function () {
            expect(dataProcessors_1.fullTime(1594000000)).toBe('06.07.2020 01:46:40');
        });
        it("returns '24.05.2020 14:59:12' if date is '24.05.2020 14:59:12'", function () {
            expect(dataProcessors_1.fullTime('2020-05-24T14:59:12.609Z')).toBe('24.05.2020 14:59:12');
        });
    });
});
//# sourceMappingURL=dataProcessors.test.js.map