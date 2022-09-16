
let count=0;
const buton=document.querySelector('#buton');

const todo=document.querySelector('#todo');
buton.addEventListener('click',changeText);
function changeText(e){
    const form=document.querySelectorAll('.list-group')[0].children[count];
    form.textContent=todo.value;
    e.preventDefault();
    count++;
    
}
console.log(form);

