/**
 * Name        : main.js
 * Author      : Yakov Kazinets
 * Date        : April 26, 2021
 * Description : Kargo Summer Intern Pre-assessment
 * 
 */
  

'use strict';
let myarray = [];
try {
    for (let i = 2; i < process.argv.length; i++){
        var currentnumber = Number(process.argv[i]);
        //Input validation
        if(typeof currentnumber !== 'number'){
            throw `${process.argv[i] || 'provided variable'} is not a number`;
        }
        if (isNaN(currentnumber)){
            throw `${process.argv[i] || 'provided variable'} is NaN`;
        }
        if(!Number.isInteger(currentnumber)){
            throw `${process.argv[i] || 'provided variable'} is not an integer number`;
        }
        //Create an intial empty string called curr_number_string
        let curr_number_string = "";
        if (currentnumber == 0){ //If it is just 0 as a base case the string becomes 'Zero'
            curr_number_string = "Zero";
        }
        var modingnumber = currentnumber; //to ensure no clashing if the operation occurs on the current working number
        while (currentnumber >=1){ //If the number is less than 1 algorithm ceases the switch cases and continues onto printing
            let temp = modingnumber % 10; //temp is a the last integer of the number
            let tempstr = curr_number_string; //tempstr is equivalent to the curr string value for the arguement
            switch(temp){ //switchcasing from 0-9
                case 0:
                    tempstr = "Zero" + curr_number_string;
                    break;
                case 1:
                    tempstr = "One" + curr_number_string;
                    break;
                case 2:
                    tempstr = "Two" + curr_number_string;
                    break;
                case 3:
                    tempstr = "Three" + curr_number_string;
                    break;
                case 4:
                    tempstr = "Four" + curr_number_string;
                    break;
                case 5:
                    tempstr = "Five" + curr_number_string;
                    break;
                case 6:
                    tempstr = "Six" + curr_number_string;
                    break;
                case 7:
                    tempstr = "Seven" + curr_number_string;
                    break;
                case 8:
                    tempstr = "Eight" + curr_number_string;
                    break;
                case 9:
                    tempstr = "Nine" + curr_number_string;
                    break;
            }
            curr_number_string = tempstr; //update the current string
            currentnumber = Math.floor(currentnumber/10); //floor the number to ensure not a float
            modingnumber = currentnumber; //the current number used for modulus is updated as well
        }
        myarray.push(curr_number_string); //push back of the array current string value
    }
} catch (e) {
    console.log(e); //print out an errors caught with the try catch for arguement inputing
}

let currStr = "";
for (const i in myarray){
    if (i == myarray.length-1){ //if it is the last item it does not need the comma at the end
        currStr += myarray[i]; 
    } else {                    //otherwise nomral str is added to the end of currStr for printing
        currStr += myarray[i] + ",";
    }
}
console.log(currStr); //print to stdout using console.log
process.exit();