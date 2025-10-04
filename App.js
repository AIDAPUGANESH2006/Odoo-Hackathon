import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SubmitExpense from './components/SubmitExpense';
import ExpenseHistory from './components/ExpenseHistory';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Employee dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Submit expense page */}
        <Route path="/submit-expense" element={<SubmitExpense />} />

        {/* Expense history page */}
        <Route path="/history" element={<ExpenseHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
