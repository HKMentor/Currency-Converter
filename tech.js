#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBR: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBR', 'INR', 'PKR',]
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBR', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter your Amount?',
        type: 'number'
    },
]);
let fromAccount = currency[user_answer.from]; //exchange rate
let toAccount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let basedAmount = amount / fromAccount;
let convertedAmount = basedAmount * toAccount;
console.log(convertedAmount);
