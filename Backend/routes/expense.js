const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// ADD EXPENSE
router.post("/", async (req, res) => {
  try {
    const newExpense = await Expense(req.body);
    const expense = newExpense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL EXPENSE
router.get("/", async (req, res) => {
    try {
        const expenses = Expense.find().sort({createdAt: -1});
        res.status(200).json({expenses});
    } catch (error) {
        res.status(500).json({error});
        
    }
});

// UPDATE EXPENSE
router.put("/", (req, res) => {});

// DELETE AN EXPENSE
router.delete("/", (req, res) => {});

module.exports = router;
