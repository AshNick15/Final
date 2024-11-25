let total = 0;

function addExpense() {
  const amount = parseFloat(document.getElementById("amount").value);
  const description = document.getElementById("description").value;

  if (isNaN(amount) || amount <= 0 || !description) {
    alert("Please enter valid expense details.");
    return;
  }

  const table = document
    .getElementById("expenseTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.textContent = `$${amount.toFixed(2)}`;
  cell2.textContent = description;

  total += amount;
  document.getElementById(
    "totalExpenses"
  ).textContent = `Total Expenses: $${total.toFixed(2)}`;

  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
}

document.getElementById("homeButton").addEventListener("click", function () {
  window.location.href = "index.html";
});
