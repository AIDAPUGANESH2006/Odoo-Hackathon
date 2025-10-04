import React, { useState } from "react";

function SubmitExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // ✅ Your function goes here
  const handleSubmit = async (e) => {
    e.preventDefault();

    const expenseData = {
      employeeId: "EMP001", // later you can take this from login session
      amount,
      category,
      description,
    };

    const response = await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="submit-expense">
      <h2>Submit Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitExpense;
