// JavaScript Document
var emp_num = [];
var net_pay = 0;
for(var i=0;i<50; i++){
    emp_num.push(prompt("Number of hours worked"));
    if(emp_num[0]<0){
        alert("Invalid Entry");
        emp_num[0]=prompt("Number of hours worked");
    }
    if(emp_num[i] <= 0){
        break;
    }


}
emp_num.pop();

var pay_table= "<table align='center'><tr><th style='width: 15%; color: red;'> Employee number</th>";
pay_table+= "<th style='width: 15%; color: red; text-align: right;'> Hours worked </th>";
pay_table+="<th style='width: 15%; color: red; text-align: right;'> Net Pay</th></tr>";


for (var j=0; j<emp_num.length; j++) {
    pay_table+="<tr><td style='width: 15%;'>" + (j+1) + "</td>";
    //  myArray[i] = myArray[i].toFixed(3);
    pay_table+="<td style='width: 15%; text-align: right;'>" + emp_num[j] + "</td>";
    pay_table+="<td style='width: 15%; text-align: right;'>" + (weeklyPay(emp_num[j])) + "</td></tr>";
}
pay_table+="</table>";

document.write( pay_table);


function weeklyPay(total_hours) {
    var paycheck = 0;
    var hourly_pay = 15;
    var over_time = 0;
    if (total_hours > 40) {
        over_time = (total_hours - 40) * (hourly_pay * (1.5));
        return paycheck = (40*15) + over_time;

    }else {
        return paycheck = hourly_pay * total_hours;
    }
}


    for(var k=0;k<emp_num.length;k++){

       net_pay +=  weeklyPay(emp_num[k]);
    }

var sum = "<p style='font-size:20pt'> Totally pay for all employees:<strong>" + net_pay +"</strong></p>";
document.write(sum);