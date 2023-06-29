let span = document.createElement('span')

document.addEventListener('DOMContentLoaded', function() {
    fetch(" http://localhost:3000/pups")
    .then(response => response.json())
    .then(data => renderDogs(data))

    function renderDogs(data){
     data.forEach(pups => {
     let span = document.createElement('span')
        span.innerText = `${pups.name}` 
        document.querySelector('#dog-bar').append(span)

        span.addEventListener('click', display)

         function display(){     
            let dogInfoArea = document.querySelector('#dog-info')
            dogInfoArea.innerHTML = "";
            let img = document.createElement('img')
            img.src = `${pups.image}`
            let name = document.createElement('h2')
            name.innerText = `${pups.name}`
            let button = document.createElement('button')
            button.innerText = `${pups.isGoodDog}`=== 'true'? "Good Dog" : "Bad Dog";
              //if (`${pups.isGoodDog}` === 'true'){
              //  button.innerText =  "Good Dog"
             //} else button.innerText =  "Bad Dog"

            
            dogInfoArea.append(img, name, button)

                button.addEventListener('click',dogTemparament)
        
                function dogTemparament(){
                    fetch(`http://localhost:3000/pups/${pups.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                            isgoodDog: `${pups.isGoodDog}`!== 'true'? "Good Dog" : "Bad Dog",
                            isGoodDog: `${pups.isGoodDog}`!== 'true'? "True" : "False"
                            //if (`${pups.isGoodDog}`=== 'true'){

                           // }
                        })
                    })
                    .then(resp => resp.json())
                    .then(data => changeTemparament(data))

                    function changeTemparament(data){
                       
                       button.innerText =  `${pups.isGoodDog}`!== 'true'? "Good Dog" : "Bad Dog"

                    }
                        
                } 
                    
                
                  

            }
       
    });
    
    }

/* let toggle=document.querySelector("#filter-div")
     toggle.addEventListener('click', filter)

     function filter(){
            fetch("http://localhost:3000/pups")
            .then(resp => resp.json())
            .then(function(data) {
                if(toggle.innerText === "Filter good dogs: OFF") {
                    toggle.innerText = "Filter good dogs: ON"
                    
                } else {
                    toggle.innerText = "Filter good dogs: OFF"
                    document.querySelector('#dog-bar').innerHTML = ''
                    data.forEach(display) }
    
        })
        }
    
   */     

})

