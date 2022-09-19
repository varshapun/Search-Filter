const searchInput = document.querySelector('.input-search')
const li = document.querySelectorAll('.li');
const a = document.querySelectorAll('.label-1')
const searchFilter = (e) => {
    // if (e.key == 'Enter') {
       
       
        for (let i = 0; i < li.length; i++) {
             let searchValue = searchInput.value;
             console.log('searchValue : ',searchValue);
            console.log('a[i]', a[i].innerText);
           
            if (a[i].innerText.toUpperCase().startsWith(searchValue.toUpperCase())) {
                   li[i].style.transition = 'all .4s ease-in'
                li[i].style.display = ''
              
            }
            else {
                   li[i].style.transition = 'all .4s ease-in'
                li[i].style.display = 'none'
            }   
        } 
    // }
    if (searchInput.value === '') {
       for (let i = 0; i < li.length; i++) {
           li[i].style.display = '';
       }
   }
    
}

searchInput.addEventListener('keyup',searchFilter)

