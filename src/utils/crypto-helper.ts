import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import env from './validate-env';

const SECRET: any = env.SECRET_KEY || "";

export const encrypt = (data: any) => {
    const expired = { expiresIn: "1d" };
    return jwt.sign(data, SECRET, expired);
};

export const decrypt = (token: any) => {
    return jwt.decode(token, SECRET);
};

export const hashAsync = async (password: string) => {
    return await bcrypt.hash(password, 10);
};

export const compareAsync = async (password: string, passwordHash: string) => {
    return await bcrypt.compare(password, passwordHash);
};