"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var React = require("react");
var Table_1 = require("@material-ui/core/Table");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableHead_1 = require("@material-ui/core/TableHead");
var TableRow_1 = require("@material-ui/core/TableRow");
var Typography_1 = require("@material-ui/core/Typography");
var Grid_styles_1 = require("./Grid.styles");
var GridRow_1 = require("./GridRow");
var Pagination_1 = require("./Pagination");
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grid.prototype.render = function () {
        var _a = this.props, items = _a.items, pagination = _a.pagination, deleteItem = _a.deleteItem, config = _a.config, editItem = _a.editItem, classes = _a.classes, fetchItems = _a.fetchItems;
        return (React.createElement("div", { className: classes.root },
            config.title && (React.createElement("div", null,
                React.createElement(Typography_1.default, { variant: "h4", id: "tableTitle" }, config.title))),
            React.createElement(Table_1.default, null,
                React.createElement(TableHead_1.default, null,
                    React.createElement(TableRow_1.default, null,
                        config.columns.map(function (column) { return (React.createElement(TableCell_1.default, { key: column.name, component: "th", scope: "row", style: { width: Boolean(column.width) ? column.width : 'auto' } }, column.title)); }),
                        React.createElement(TableCell_1.default, { component: "th", scope: "row" }))),
                React.createElement(TableBody_1.default, null, items.map(function (item) {
                    return (React.createElement(GridRow_1.GridRow, { key: item.id, item: item, config: config, deleteItem: deleteItem, editItem: editItem }));
                }))),
            React.createElement(Pagination_1.Pagination, { fetchItems: fetchItems, pagination: pagination })));
    };
    return Grid;
}(React.Component));
var StyledGrid = Grid_styles_1.withStyles(Grid);
exports.Grid = StyledGrid;
//# sourceMappingURL=Grid.js.map