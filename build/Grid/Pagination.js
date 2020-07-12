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
exports.Pagination = void 0;
var TablePagination_1 = require("@material-ui/core/TablePagination");
var React = require("react");
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangePage = function (event, newPage) {
            var _a = _this.props, pagination = _a.pagination, fetchItems = _a.fetchItems;
            if (!fetchItems || !pagination) {
                return;
            }
            fetchItems(newPage, pagination.pageSize);
        };
        _this.handleChangeRowsPerPage = function (event) {
            var fetchItems = _this.props.fetchItems;
            if (!fetchItems) {
                return;
            }
            fetchItems(0, +event.target.value);
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        var pagination = this.props.pagination;
        if (!pagination) {
            return null;
        }
        return (React.createElement(TablePagination_1.default, { component: "div", count: pagination.totalEntityCount, rowsPerPage: pagination.pageSize, page: pagination.page, backIconButtonProps: {
                'aria-label': 'Previous Page',
            }, nextIconButtonProps: {
                'aria-label': 'Next Page',
            }, onChangePage: this.handleChangePage, onChangeRowsPerPage: this.handleChangeRowsPerPage }));
    };
    return Pagination;
}(React.Component));
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map