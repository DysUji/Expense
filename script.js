const expenseForm = document.getElementbyId('expense-form');
const expenseList = document.getElementbyId('expense-list');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const expense = document.getbyElementbyId('expense').value;
    const amount =  document.getbyElementbyId('amount').value;

    addExpense(expense, amount);

    expenseForm.reset();

function addExpense(expense, amount) {
  const row = document.createElement('tr');
  const expenseCell = document.createElment('td')
  const amountCell = document.createElement('td')

  expenseCell.textContent = expense;
  amountCell.textContent = amount;

  rowappendChild(expenseCell);
  rowappendChild(amountCell);

  expenseList.appendChild(row);
