const zod = require("zod");

const usernameSchema = zod.string();
const passwordSchema = zod.string().min(8).max(30);

module.exports = {
    usernameSchema,
    passwordSchema
}