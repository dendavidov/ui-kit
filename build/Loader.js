"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var React = require("react");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function () { return ({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); });
var Loader = function () {
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(CircularProgress_1.default, null)));
};
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map