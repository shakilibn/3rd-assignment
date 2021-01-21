// https://github.com/shakilibn/3rd-assignment

function kilometerToMeter(kilometer){
    if(kilometer < 0) {                        //this is condition for negative number
        return "distance cannot be negative";
    }
    else {
        var meter = kilometer * 1000;          //converting kilometer to meter
        return meter;
    }
}


function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    if(watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0){
        return "quantity cannot be negative";
    }
    else {
        var watchTotalPrice = watchQuantity * 50;        //calculating price
        var phoneTotalPrice = phoneQuantity * 100;      //calculating price
        var laptopTotalPrice = laptopQuantity * 500;   //calculating price
        var totalPrice = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;  //calculating total price
        return totalPrice;
    }
}


function hotelCost(days){
    var totalBill = 0;
    if(days < 0){
        return "Days cannot be negative";
    }
    else if(days <= 10){
        totalBill = days * 100;      //total bill of first 10 days
        return totalBill;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;             //bill of first 10 days
        var remainingDays = days - 10;
        var secondPart = remainingDays * 80;    //bill of second 10 days
        totalBill = firstPart + secondPart;     //total bill
        return totalBill;
    }
    else{
        var firstPart = 10 * 100;           //bill of first 10 days
        var secondPart = 10 * 80;           //bill of second 10 days
        var remainingDays = days - 20;
        var thirdPart = remainingDays * 50;  //bill of after 20 days
        totalBill = firstPart + secondPart + thirdPart;     //total bill
        return totalBill;
    }
}


function megaFriend(names) {
    var maxLetterNumber = names[0].length;
    var largeName = names[0];
    if (names == "" || names == " ") {
        return "you entered empty string";
    }
    else {
        for (var i = 0; i < names.length; i++) {
            var letterNumber = names[i].length;
            var arrayName = names[i];
            if (letterNumber > maxLetterNumber) {
                maxLetterNumber = letterNumber;
                largeName = arrayName;              //set large name of array
            }
        }
    }
    return largeName;
}