

console.log("Hi");

let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonOnClickHandler)

function buttonOnClickHandler(){
    console.log("You have clicked the fetchbtn");

    ///Instantiate an xhr object

    const xhr = new XMLHttpRequest();

    //open the object
    ///3 parameters (GET/POST, target link, bool);
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);

    ///Optional only if we want to track the progress

    xhr.onprogress = function(){
        console.log('On progress');
    }

    xhr.onreadystatechange = function(){
        console.log("The log is", xhr.readyState);
    }
    ///What to do when response is ready
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
        else{
            console.log("Something went wrong");
        }
    }

    ///Send the request

    xhr.send();
    console.log("I am done with this\n");
}

let popBtn = document.getElementById('PopBtn');

popBtn.addEventListener('click', popHandler)

function popHandler(){
    console.log("You have clicked the pop Handler");

    ///Instantiate an xhr object

    const xhr = new XMLHttpRequest();

    //open the object
    ///3 parameters (GET/POST, target link, bool);
    xhr.open('GET', 'fruits.json', true);

    ///Optional only if we want to track the progress

    xhr.onload = function(){
        if(this.status == 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            
            // let list = document.getElementById('list');
            
            // str = "";

            // for(key in obj){
            //     str += `<li>${obj[key].id}</li>`;
            // }
            // list.append(str);
        }
        else{
            console.log("Something went wrong");
        }
    }

    ///Send the request

    xhr.send();
    console.log("I am done with this\n");
}
