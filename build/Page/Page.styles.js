"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var breakpointTablet = 768;
var useStyles = styles_1.makeStyles(function () {
    var _a;
    return (_a = {
            root: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            },
            header: {
                display: 'flex',
                alignItems: 'center',
                color: '#555555',
                zIndex: 1029,
                padding: '10px 15px',
                boxShadow: 'none',
                transition: 'all 150ms ease',
                minHeight: 50,
                borderWidth: 0,
                marginBottom: 0,
                borderRadius: 3,
                backgroundColor: 'transparent',
            },
            content: {
                padding: '10px 15px',
                overflow: 'auto',
                display: 'flex',
                flex: 1,
            }
        },
        _a["@media screen and (max-width: " + breakpointTablet + "px)"] = {
            header: {
                marginLeft: 70,
            },
        },
        _a);
});
exports.useStyles = useStyles;
//# sourceMappingURL=Page.styles.js.map