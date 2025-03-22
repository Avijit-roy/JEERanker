"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            res.status(400).json({
                message: "All the fields are required",
            });
            return;
        }
        const user = yield user_model_1.default.findOne({ username });
        if (!user) {
            res.status(404).json({
                message: "user not found",
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id
        }, process.env.JWT_SECRET);
        res.status(200).json({
            message: "user Login successfull",
            token
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error while login",
        });
        return;
    }
});
exports.default = userLogin;
