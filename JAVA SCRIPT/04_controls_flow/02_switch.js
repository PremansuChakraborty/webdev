/*
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
*/
let day="monday"
switch (day){
    case "monday":
        case "tuesday":
           case "wednesday":
              case "thursday":
                 case "friday":
                    console.log("weekdays!")
                     break;
    case "saturday":
        case"sunday":
           console.log("weekends!")
           break;
    default:
        console.log("wrong input")
}