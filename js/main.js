
function principal(){
    var menuu = document.getElementById('menuu');
    var pais = menuu.value;

   
    var paisselec;
    var nombre = document.querySelector('.Nombre');
    var temact = document.querySelector('.Temact');
    var temmin = document.querySelector('.Temmin');
    var temmax = document.querySelector('.Temmax');
    var estado = document.querySelector('.Estado');
    var nombp = document.querySelector('.NombP');
    var cap = document.querySelector('.Cap');
    var codp = document.querySelector('.Codp');
    var pobl = document.querySelector('.Pobl');
    var regio = document.querySelector('.Regio');
    var imgp = document.querySelector('.ImgP');
    
   
    switch(pais){
        case "Col":
        paisselec = "colombia";
        
        paises(paisselec);

        break;
        case "Bra": 
        paisselec = "brasil";
        
        paises(paisselec);

        break;
        case "Arg": 
        paisselec = "argentina";
        paises(paisselec);

        break;
        case "Per": 
        paisselec = "peru";
        paises(paisselec);
        
        break;
        case "Chi": 
        paisselec = "chile";
        paises(paisselec);
        
        break;
        case "Ecu": 
        paisselec = "Ecuador";
        paises(paisselec);

        break
        case "Ven": 
        paisselec = "venezuela";
        paises(paisselec);

        break
        case "Bol": 
        paisselec = "bolivia";
        paises(paisselec);

        break
        case "Urg": 
        
        paisselec = "uruguay";
        paises(paisselec);

        break
        case "Par": 
        paisselec = "paraguay";
        paises(paisselec);
        break
    }
    function paises(paisselec) {

        fetch('https://restcountries.eu/rest/v2/name/'+paisselec+'')
        .then(Response => Response.json())
        .then(data => {
            var nompValue = data['0']['name'];
            var capValue = data['0']['capital'];
            var codpValue = data['0']['callingCodes']['0'];
            var poblValue = data['0']['population'];
            var regioValue = data['0']['region'];
            var imgpValue = data['0']['flag'];
            
            nombp.innerHTML ="Pais: "+nompValue;
            cap.innerHTML ="Capital: "+capValue+`<br/>`;
            codp.innerHTML ="Codigo Pais: "+codpValue+`<br/>`;
            pobl.innerHTML ="Poblacion: "+poblValue+"<br/>";
            regio.innerHTML ="Region: "+regioValue+`<br/>`;
            imgp.innerHTML = '<img src="'+imgpValue+'" width="400" height="300">';
            
            clima(capValue); 
        })
       
    }
    function clima(ciudadclim) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudadclim+'&appid=cecd891ddec9801054aa8017c995ebb5')
        .then(Response => Response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];            
            var descValue = data['weather'][0]['description'];
            var temminValue = data['main']['temp_min'];
            var temmaxValue = data['main']['temp_max'];
            var latValue = data['coord']['lat'];
            var lngValue = data['coord']['lon'];
            
            
            nombre.innerHTML ="Nombre: "+ nameValue;
            temact.innerHTML ="Temperatura Actual: "+tempValue+`<br/>`;
            temmin.innerHTML ="Temperatura Minima: "+temminValue+`<br/>`;
            temmax.innerHTML ="Temperatura Maxima: "+temmaxValue+`<br/>`;
            estado.innerHTML = "Estado: "+descValue;
            
            iniciarMap(latValue,lngValue);   
        })
             
            
               
    }
    

      



}
function iniciarMap(latt,lngg){
    var coord = {lat:latt ,lng: lngg};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 5,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
