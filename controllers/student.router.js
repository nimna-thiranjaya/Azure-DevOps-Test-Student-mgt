const bcrypt = require("bcrypt");
const Student = require("../models/student.model");

const StudentRegister = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;

    const emailCheck = await Student.findOne({ email: email });

    if (!emailCheck) {
      const gensalt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, gensalt);
      await Student.create({
        name: name,
        email: email,
        age: age,
        password: hashpassword,
      });
      return res
        .status(200)
        .send({ status: true, message: "User registration successful" });
    } else {
      return res
        .status(500)
        .send({ status: false, message: "user already registered" });
    }
  } catch (e) {
    return res.status(500).send({ status: false, message: e.message });
  }
};

const GetAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find();
    return res.status(200).send({ status: true, students: allStudents });
  } catch (e) {
    return res.status(500).send({ status: false, message: e.message });
  }
};
module.exports = { StudentRegister, GetAllStudents };
