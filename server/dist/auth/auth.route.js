"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_config_1 = require("./auth.config");
const router = express_1.default.Router();
router.post('/signup', auth_config_1.authController.signUp);
router.post('/signin', auth_config_1.authController.signIn);
exports.default = router;
