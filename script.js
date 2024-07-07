let input =  document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
// console.log(arr) 

arr.forEach((button)=>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            try{
                string = eval(string.replace(/%/g, '/100'))
                input.value = string
            } catch(error){
                console.log('Error')
                input.value = 'Error';
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})


