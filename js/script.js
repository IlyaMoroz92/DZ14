
function arr(num){
    document.querySelector('p').remove()
    num = Number(document.querySelector('.input-text').value);
    let array = new Array(num+1);
    for(let i = array.length - 1; i > 0; i--){
        rand = Math.floor(Math.random() * (i - 1));
        x = array[rand] || rand;
        array[rand] = array[i] || i;
        array[i] = x
    }
    let body = document.querySelector('body')
    const p = document.createElement('p');
    p.innerHTML = '';
    p.innerText = '[' + array.toString().split(',').join(',  ') + ']';
    body.appendChild(p);
}   




