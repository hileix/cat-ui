"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var MenuItem_1 = require("./MenuItem");
var SubMenu_1 = require("./SubMenu");
Menu_1.default.SubMenu = SubMenu_1.default;
Menu_1.default.Item = MenuItem_1.default;
exports.default = Menu_1.default;
