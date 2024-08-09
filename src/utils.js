import bcrypt from 'bcryptjs';

export function generateHash(key1, key2, ip) {
    const string = `${key1}:${key2}:${ip}`;
    return bcrypt.hashSync(string, bcrypt.genSaltSync(10));
}