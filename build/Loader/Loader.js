"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var React = require("react");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var Loader_styles_1 = require("./Loader.styles");
var Loader = function () {
    var classes = Loader_styles_1.useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(CircularProgress_1.default, null)));
};
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map