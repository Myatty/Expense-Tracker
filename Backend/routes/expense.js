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
    const expenses = Expense.find().sort({ createdAt: -1 });
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// UPDATE EXPENSE
router.put("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).sjson(expense);
  } catch (error) {
    res.status(500).sjson(error);
  }
});

// DELETE AN EXPENSE
router.delete("/:id", async (req, res) => {

    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(201).json("Deleted Successfully")
    } catch (error) {
        res.status(500).sjson(error);

    }
});

module.exports = router;
