"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRegistration_controller_1 = __importDefault(require("../controllers/userRegistration.controller"));
const userLogin_controller_1 = __importDefault(require("../controllers/userLogin.controller"));
const router = (0, express_1.Router)();
router.post('/registration', userRegistration_controller_1.default);
router.post('/login', userLogin_controller_1.default);
exports.default = router;
