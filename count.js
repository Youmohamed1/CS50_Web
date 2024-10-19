let counter =0;

function Count() {
    counter++;
    let count = document.querySelector('h1');
    count.innerHTML = counter;

    if(counter % 10 === 0){
    alert(`Count is now ${counter}`);
    }
        }