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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, fullName, email, phoneNumber, DOB, password } = req.body;
    try {
        if (!username || !fullName || !email || !phoneNumber || !DOB || !password) {
            res.status(400).json({
                message: "All the fields are required",
            });
            return;
        }
        const isUserExists = yield user_model_1.default.findOne({ username });
        if (isUserExists) {
            res.status(409).json({
                message: "user already exists",
            });
            return;
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        yield user_model_1.default.create({
            username,
            fullName,
            email,
            phoneNumber,
            DOB,
            password: hashedPassword
        });
        res.status(200).json({
            message: "User created successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error while registration",
            error: err
        });
        return;
    }
});
exports.default = userRegistration;
