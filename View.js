const toggleList = document.querySelector('#anniu');
const listDiv = document.querySelector('.neirong');


toggleList.addEventListener('click',() => {
    if(listDiv.style.display != 'none')  {
        listDiv.style.display = 'none';
        toggleList.textContent = 'display';
    } else {
         listDiv.style.display = 'block';
        toggleList.textContent = 'View All Products';
       
    }
});