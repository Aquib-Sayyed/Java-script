
const form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#Weight').value)

    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){

        result.innerHTML = `Please give a valid height ${height}`
        
    }

    if(weight === '' || weight < 0 || isNaN(weight)){

        result.innerHTML = `Please give a valid height ${weight}`
        
    }

    else{
   const bmi=  (weight/(height*height/1000).toFixed(2));

   result.innerHTML = `<span>${bmi}</span>`
    }

});