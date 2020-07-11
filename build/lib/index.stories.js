"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmoji = exports.withText = void 0;
var React = require("react");
var Button_1 = require("./Button");
exports.default = { title: "Button" };
exports.withText = function () { return React.createElement(Button_1.Button, null, "Hello Button"); };
exports.withEmoji = function () { return (React.createElement(Button_1.Button, null,
    React.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D"))); };
//# sourceMappingURL=index.stories.js.map