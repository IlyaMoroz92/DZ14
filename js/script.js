function arr (num) {
    document.querySelector('p').remove()
    num = Number(document.querySelector('.input-text').value);
    let array = new Array(num+1);
    for (let i = 1; i<(arr.length+1); i++) {
    let num = Math.floor(Math.random()*(arr.length));
    if (arr[num] === undefined) {
        arr[num] =  i;
        console.log(i);
        console.log(arr);
        } else {
        for ( j = 0; j < (arr.length+1); j++) {
            if (arr[j] === undefined) {
            arr[num] =  i;
            /* arr[num]; */
            console.log(arr[num]);
            break;
            }
        }       
        console.log(arr);
        }
   }
   let body = document.querySelector('body')
   const p = document.createElement('p');
   p.innerHTML = '';
   p.innerText = '[' + array.toString().split(',').join(',  ') + ']';
   body.appendChild(p);
}