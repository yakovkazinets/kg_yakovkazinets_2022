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
    /*if (process.argv.length > 2){
        throw "Usage: node main.js integers split by spaces"
    };*/
    for (let i = 2; i < process.argv.length; i++){
        var currentnumber = Number(process.argv[i]);
        if(typeof currentnumber !== 'number'){
            throw `${process.argv[i] || 'provided variable'} is not a number`;
        }
        if (isNaN(currentnumber)){
            throw `${process.argv[i] || 'provided variable'} is NaN`;
        }
        if(!Number.isInteger(currentnumber)){
            throw `${process.argv[i] || 'provided variable'} is not an integer number`;
        }
        //let currentnumber = process.argv[i];
        let curr_number_string = "";
        if (currentnumber == 0){
            curr_number_string = "Zero";
        }
        var modingnumber = currentnumber;
        while (currentnumber >=1){
            let temp = modingnumber % 10;
            let tempstr = curr_number_string;
            switch(temp){
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
            curr_number_string = tempstr;
            currentnumber = Math.floor(currentnumber/10);
            modingnumber = currentnumber;
        }
        myarray.push(curr_number_string);
    }
} catch (e) {
    console.log(e);
}

//let myarray = (process.argv[2]);
let currStr = "";
for (const i in myarray){
    if (i == myarray.length-1){
        currStr += myarray[i];
    } else {
        currStr += myarray[i] + ",";
    }
}
console.log(currStr);
process.exit();