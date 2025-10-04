import React from 'react';
import './ExpenseHistory.css';

function ExpenseHistory() {
  // Dummy expense data
  const expenses = [
    { id: 1, date: '2025-10-01', category: 'Travel', amount: 150, status: 'Pending' },
    { id: 2, date: '2025-09-28', category: 'Food', amount: 50, status: 'Approved' },
    { id: 3, date: '2025-09-25', category: 'Stationery', amount: 30, status: 'Rejected' },
  ];

  const getStatusClass = (status) => {
    if (status === 'Pending') return 'status-pending';
    if (status === 'Approved') return 'status-approved';
    if (status === 'Rejected') return 'status-rejected';
    return '';
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Expense History</h1>
      </div>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>${expense.amount}</td>
              <td className={getStatusClass(expense.status)}>{expense.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseHistory;
