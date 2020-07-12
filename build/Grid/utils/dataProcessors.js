"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullTime = void 0;
var date_fns_1 = require("date-fns");
var ONE_THOUSAND = 1000;
exports.fullTime = function (date) {
    if (typeof date === 'number')
        return date_fns_1.format(new Date(date * ONE_THOUSAND), 'dd.MM.yyyy HH:mm:ss');
    if (typeof date === 'string')
        return date_fns_1.format(new Date(date), 'dd.MM.yyyy HH:mm:ss');
    return '';
};
//# sourceMappingURL=dataProcessors.js.map