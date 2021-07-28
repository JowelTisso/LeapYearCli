var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blue.bgWhite.bold("Welcome to the program!"))
console.log(`Check whether your birth year is a ${chalk.yellow("leap year")}!`)
console.log(" ")
const app = () =>{

    var bornYear = readlineSync.question(`Which year were you born?
`);

    const checkIfLeapYear = (year) =>{

      const rem4 = year % 4
      const rem100 = year % 100
      const rem400 = year % 400

      if(rem4 === 0){
        if(rem100 != 0){
          console.log(chalk.green("Leap year!"))
        }else{
          if(rem400 === 0){
            console.log(chalk.green("Leap year!"))
          }else{
            console.log(chalk.red("Not a leap year!"))
          }
        }
      }else{
        console.log(chalk.red("Not a leap year!"))
      }
      console.log("_________")
      console.log(" ")
      var ans = readlineSync.keyInYN("Do you want to check again?")
      if(ans){
          app()
      }else{
        console.log("Thank you for checking!")
      }
    }

    if(bornYear){

        //Validating year with regex
        const regex = /[0-9]+/
        const isValid = bornYear.match(regex)
        //
        if(isValid && bornYear.length == 4){
            checkIfLeapYear(bornYear)
        }else{
            console.log("Please input a correct year!")
            console.log("_______")
            app()
        }

    }else{
        console.log("Invalid Year!")
        app()
    }
}

app()