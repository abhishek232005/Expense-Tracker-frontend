import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens }) => {

  // styles object
  const styles = {
    expenseList: {
      width: "400px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif"
    },

    expenseItem: {
      display: "flex",
      alignItems: "center",
      background: "#f1f1f1",
      padding: "10px",
      marginBottom: "8px",
      borderRadius: "4px"
    },

    deleteButton: {
      background: "#e74c3c",
      color: "#fff",
      border: "none",
      width: "30px",
      height: "30px",
      borderRadius: "4px",
      cursor: "pointer",
      marginRight: "15px",
      fontWeight: "bold"
    },

    description: {
      flex: 1,
      fontSize: "15px",
      fontWeight: "500"
    },

    amount: {
      fontSize: "15px",
      fontWeight: "bold"
    }
  };

  return (
    <div style={styles.expenseList}>
      {expenses.map((expense) => (
        <div key={expense._id} style={styles.expenseItem}>

          <button
            style={styles.deleteButton}
            onClick={() => deleteExpens(expense._id)}
          >
            X
          </button>

          <div style={styles.description}>
            {expense.text}
          </div>

          <div
            style={{
              ...styles.amount,
              color: expense.amount > 0 ? "#27ae60" : "#e74c3c"
            }}
          >
            ₹{expense.amount}
          </div>

        </div>
      ))}
    </div>
  );
};

export default ExpenseTable;