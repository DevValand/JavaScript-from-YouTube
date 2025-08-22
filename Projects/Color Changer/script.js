const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        switch (e.target.id) {
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
                    
        }
    })
})