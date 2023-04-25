





const btn= document.querySelector(".btn");
const reset= document.querySelector(".reset");
const result= document.querySelector(".result");
//Don't understand next line
btn.addEventListener("click", calculateBMI);
function calculateBMI(e)
{
  //Don't understand this line
  e.preventDefault();

  let height= document.querySelector("height").value;
  let weight= document.querySelector("weight").value;

  console.log(height);

  // we are adding error handling
  if(height==="" || isNaN(height))
  {
    return(result.innerHTML="Please provide us your valid height");
  }
  else if(weight==="" || isNaN(weight))
  {
    return(result.innerHTML="Please provide us your valid weight");
  }
  else
  {
    //To calculate bmi we need to divide the weight in kg by height in meter square
    let height=height/100;
    let BMI= (weight/math.pow(height, 2)).toFixed(2);

    if (BMI>18.5 && BMI<24.9) 
    {
      result.innerHTML="Your BMI is in normal range. Keep a good Diet"; 
    }
    else if (BMI>25 && BMI<29.9) 
    {
      result.innerHTML="Your BMI is in overweight range. Do some more physical activity";
    }
    else if (BMI>30) 
    {
      result.innerHTML="Your BMI is in Obese range. Consult to a doctor";  
    }
    else
    {
      result.innerHTML="Your BMI is in underweight range. Add some more food to your diet"; 
    }
  }
  reset.style.display = "block";
}
reset.addEventListener("click", resetting);
function resetting(e)
{
  document.querySelector("form").reset();
  reset.style.display = "none";
  result.style.display = "none";
}