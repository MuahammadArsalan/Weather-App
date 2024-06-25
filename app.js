

let form= document.querySelector('#form')
let city= document.querySelector('#city')
let div= document.querySelector('#div')
// b4db485d7c4c485fa6d84351232508   Abdullah


function renderTemp(){

        
        form.addEventListener('submit',(event)=>{
            event.preventDefault()
            
            axios(
                `https://api.weatherapi.com/v1/current.json?key=6cd5964c94ec44fea7395501241806&q=${city.value}&aqi=no`
            )
            
            .then((res)=>{
                
                console.log(res.data);
                
                // console.log(res.data.current.condition.text  
                // );
                // console.log(res.data.current.condition.text
                // );
                
                
                div.innerHTML = `
                <div id="content-div" class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                <img src="${res.data.current.condition.icon
                    }" class="img-fluid rounded-start" alt="slkasm" width="5000px">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h1 class="card-title">${res.data.location.name}</h1>
                    <h5 class="card-title">${res.data.location.region}</h5  >
                    <h3 class="card-title">${res.data.location.country}</h3>
                    <h5 class="card-text">${res.data.current.last_updated
                    }</h5>
                    <h5 class="card-text">Temp: ${res.data.current.temp_c}  <sup>0</sup> C</h5>
                    <h5 class="card-text">Temp: ${res.data.current.temp_f}  <sup>0</sup> F</h5>
                    <h5 class="card-text">Humidity: ${res.data.current.humidity}</h5>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    `
                    
                    city.value=''
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                })
            }           
        
        if(city.value===city.value){
            renderTemp()

        }else{
            alert('djskhfsmdnm')
        }
    
        