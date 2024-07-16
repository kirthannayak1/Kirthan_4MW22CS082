
function findMax(arr)
{
    let max=arr[0];
    for(let i = 1; i < arr.length; i++)
        {
            if(arr[i]>max)
            {
                max=arr[i]
            }
        }
        return max
}
let numbersARR = [10,30,20,40,60,50];
  let maxElement =findMax(numbersARR);
  console.log(maxElement);
