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
exports.GridRow = void 0;
var TableRow_1 = require("@material-ui/core/TableRow");
var React = require("react");
var TableCell_1 = require("@material-ui/core/TableCell");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var IconButton_1 = require("@material-ui/core/IconButton");
var Edit_1 = require("@material-ui/icons/Edit");
var Delete_1 = require("@material-ui/icons/Delete");
var GridRow = /** @class */ (function (_super) {
    __extends(GridRow, _super);
    function GridRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deleteItem = function () {
            var _a = _this.props, deleteItem = _a.deleteItem, item = _a.item;
            if (!deleteItem) {
                return;
            }
            deleteItem(item.id);
        };
        _this.editItem = function () {
            var _a = _this.props, editItem = _a.editItem, item = _a.item;
            if (!editItem) {
                return;
            }
            editItem(item);
        };
        return _this;
    }
    GridRow.prototype.render = function () {
        var _a = this.props, config = _a.config, deleteItem = _a.deleteItem, editItem = _a.editItem, item = _a.item;
        return (React.createElement(TableRow_1.default, { hover: true, role: "checkbox" },
            config.columns.map(function (column) {
                var cellValue = column.format ? column.format(item[column.name]) : item[column.name];
                return (React.createElement(TableCell_1.default, { key: column.name, component: "td", scope: "row", style: { width: Boolean(column.width) ? column.width : 'auto' } }, column.component ? (React.createElement(column.component, { value: cellValue, allValues: item })) : (cellValue)));
            }),
            React.createElement(TableCell_1.default, { align: "right", style: {
                    whiteSpace: 'nowrap',
                } },
                !!editItem && (React.createElement(Tooltip_1.default, { title: "Edit" },
                    React.createElement(IconButton_1.default, { "aria-label": "Edit", onClick: this.editItem },
                        React.createElement(Edit_1.default, null)))),
                !!deleteItem && (React.createElement(Tooltip_1.default, { title: "Delete" },
                    React.createElement(IconButton_1.default, { "aria-label": "Delete", onClick: this.deleteItem },
                        React.createElement(Delete_1.default, null)))))));
    };
    return GridRow;
}(React.Component));
exports.GridRow = GridRow;
//# sourceMappingURL=GridRow.js.map