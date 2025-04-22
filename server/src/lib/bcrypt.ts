import bcrypt from 'bcrypt';

export const passwordHash = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export const passwordCompare = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
}
