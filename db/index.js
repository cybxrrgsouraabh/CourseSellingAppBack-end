const mongoose = require("mongoose");
const { usernameSchema } = require("../zod");
mongoose.connect("mongodb+srv://cyybxrg_p:cyybxrg7417@cluster0.fpt7cvq.mongodb.net/CourseSellingApp");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
});

const User = mongoose.model("User",UserSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exprots = {
    User, Admin,Course
}