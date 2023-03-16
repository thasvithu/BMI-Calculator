function BMIresult(){
    var weight = parseFloat(document.querySelector("#weight").value);
    var height = parseFloat(document.querySelector("#height").value);

    var M = height/100;
    var BMI;

    BMI = weight/Math.pow(M,2);

    if(weight){
        if(height){
            document.getElementById("result").innerHTML = "Your BMI = " + BMI.toFixed(2);
        }else{
            alert("Please Enter your height");
        }
    }else{
        alert("Please Enter your weight");
    }

    event.preventDefault(); //Avoids repeated page refreshes
}