"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.variants = exports.items = exports.categories = void 0;
const categories_json_1 = __importDefault(require("./categories.json"));
exports.categories = categories_json_1.default;
const items_json_1 = __importDefault(require("./items.json"));
exports.items = items_json_1.default;
const variants_json_1 = __importDefault(require("./variants.json"));
exports.variants = variants_json_1.default;
