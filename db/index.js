const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://cyybxrg_p:<password>@cluster0.fpt7cvq.mongodb.net/CourseSellingApp");
// just removed the password from the connection string

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

module.exports = {
    User,
    Admin,
    Course
}
