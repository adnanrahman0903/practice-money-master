const income = document.getElementById('income-field').value;
const incomeAmount = parseInt(income);

const balance = document.getElementById('balance');

document.getElementById('btn-calculate').addEventListener('click', function () {
    const foodExpense = document.getElementById('food-field').value;
    const rentExpense = document.getElementById('rent-field').value;
    const clothesExpense = document.getElementById('clothes-field').value;

    document.getElementById('food-field').value = '';
    document.getElementById('rent-field').value = '';
    document.getElementById('clothes-field').value = '';

    if (
        income < 0 ||
        income == "" ||
        foodExpense < 0 ||
        foodExpense == "" ||
        rentExpense < 0 ||
        rentExpense == "" ||
        clothesExpense < 0 ||
        clothesExpense == ""
    ) {
        alert("Inputs must be positive numbers");
        return;
    }

    const total = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothesExpense);

    if (total > income) {
        alert("Expenses cannot be more than income");
        return;
    }

    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = total;

    balance.innerText = incomeAmount - total;
})


document.getElementById('btn-save').addEventListener('click', function () {
    const income = document.getElementById('income-field').value;
    const savePercentage = document.getElementById("save-field").value;

    if (savePercentage < 0) {
        alert("Provide positive saving value");
        return;
    }

    const savingAmount = (savePercentage / 100) * income;

    const balance = document.getElementById("balance").innerText;
    const remainingBalance = parseInt(balance) - savingAmount;

    if (savingAmount > balance) {
        alert("SavingAmount is greater than balance");
    }
    else {
        document.getElementById("saving-amount").innerText = savingAmount;
        document.getElementById("remaining-balance").innerText = remainingBalance;
    }
})   