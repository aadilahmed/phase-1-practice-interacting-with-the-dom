document.addEventListener("DOMContentLoaded", () => { 
    let paused = false;
    let boolean = true;

    const timer = document.querySelector('#counter');
    let interval = setInterval(function () { ++timer.innerText;}, 1000); 

    document.querySelector('#minus').addEventListener('click', (e) => {
        --timer.innerText;
    })

    document.querySelector('#plus').addEventListener('click', (e) => {
        ++timer.innerText;
    })

    document.querySelector('#heart').addEventListener('click', (e) => {
        const elementExists = document.getElementById(timer.innerText);
        if(elementExists){
            elementExists.value++;
            elementExists.innerText = `${elementExists.id} has been liked ${elementExists.value} times`;
        } else {
            const like = document.createElement('li');
            like.id = timer.innerText
            like.value = 1;
            like.innerText = `${timer.innerText} has been liked ${like.value} time` 
            document.querySelector('.likes').appendChild(like);
        }
    })

    document.querySelector('#pause').addEventListener('click', (e) => {
        paused = !paused;
        if (paused) {
            clearInterval(interval);
            document.querySelector('#minus').disabled = true;
            document.querySelector('#plus').disabled = true;
            document.querySelector('#heart').disabled = true;
            document.querySelector('#submit').disabled = true;
            e.target.innerText = ' resume ';
        } else {
            interval = setInterval(function () { ++timer.innerText;}, 1000);
            document.querySelector('#minus').disabled = false;
            document.querySelector('#plus').disabled = false;
            document.querySelector('#heart').disabled = false;
            document.querySelector('#submit').disabled = false;
            e.target.innerText = ' pause ';
        }                
    })

    document.querySelector('#comment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.querySelector('#comment-input').value;
        let text;
        if(boolean) {
            text = input + '\n';
            boolean = !boolean;
        }
        else {
            text = '\n' + input + '\n';
        }
        document.querySelector('#list').innerText += text;
    })
})