
function principal(){
    var menuu = document.getElementById('menuu');
    var pais = menuu.value;

    var latCol = 4.0265139;
    var lngCol = -74.0107649;
    var latBra = -8.6004423;
    var lngBra = -56.9893424;
    var latArg = -37.2325073;
    var lngArg = -67.6448581;
    var latPer = -11.0428329;
    var lngPer = -79.5062286;
    var latChi = -27.247097;
    var lngChi = -74.0681202;
    var latEcu = -1.8303686;
    var lngEcu = -79.6934167;
    var latVen = 6.0613943;
    var lngVen = -65.8191001;
    var latBol = -17.0922345;
    var lngBol = -65.025685;
    var latUrg = -33.5149723;
    var lngUrg = -55.6046421;
    var latPar = -24.0576182;
    var lngPar = -57.9622685;
    var ciudadclim;
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
    
