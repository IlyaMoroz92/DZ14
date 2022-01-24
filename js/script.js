function arr (num) {
    document.querySelector('p').remove()
    num = Number(document.querySelector('.input-text').value);
    let arr = new Array(num);
    for (let i = 1; i<(arr.length+1); i++) {
    let num = Math.floor(Math.random()*(arr.length));
    if (arr[num] === undefined) {
        arr[num] =  i;
        } else {
        for ( j = 0; j < (arr.length+1); j++) {
            if (arr[j] === undefined) {
            arr[num] =  i;
            console.log(arr[num]);
            break;
            }
        }       
        }
   }
   let body = document.querySelector('body')
   const p = document.createElement('p');
   p.innerHTML = '';
   p.innerText = '[' + arr.toString().split(',').join(',  ') + ']';
   body.appendChild(p);
}