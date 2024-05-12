const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};