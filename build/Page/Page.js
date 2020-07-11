"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var React = require("react");
var Page_styles_1 = require("./Page.styles");
var Page = function (props) {
    var children = props.children, header = props.header;
    var classes = Page_styles_1.useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement("header", { className: classes.header }, header),
        React.createElement("div", { className: classes.content }, children)));
};
exports.Page = Page;
//# sourceMappingURL=Page.js.map