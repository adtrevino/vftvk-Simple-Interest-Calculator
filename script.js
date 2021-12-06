// FUNCTION FOR COMPUTING THE SIMPLE INTEREST
function compute()
{
    // CREATING AND ASSIGNING VARIABLES
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var text = "\<br\>If you deposit "+"<mark>"+principal+"</mark>"+",\
                <br\>at an interest rate of "+"<mark>"+rate+"%"+"</mark>"+"\
                <br\>you will receive an amount of "+"<mark>"+amount+"</mark>"+",\
                <br\>in the year "+"<mark>"+year+"</mark>"+"\<br\>"
    
    // CHECK IF THE USER DID NOT GIVE AN INPUT
    if (principal == ""){
        alert("Please enter an amount");
        principal.focus();
        return false;
    }

    // IF INPUT WAS GIVEN, CHECK IF IT IS LESS THAN OR EQUAL TO ZERO
    if (principal <= 0){
        alert("Please enter a positive number");
        principal.focus();
        return false;
    }

    // IF ALL IS CORRECT, THEN PROCEED WITH GIVING THE FINAL RESULTS
    document.getElementById("result").innerHTML=text
}

// FUNCTION FOR DYNAMICALLY UPDATING THE RATE OF INTEREST 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    
    document.getElementById("rate_val").innerHTML=rateval + "%";
}
        
