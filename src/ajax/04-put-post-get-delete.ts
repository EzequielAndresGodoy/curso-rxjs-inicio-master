import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';


//get(url, headers{})
ajax.get(url, {

})

//post(url, body{}, headers{})
ajax.post(url,{
    id: 1,
    nombre: 'Ezequiel'
},{
    mitoken: 'ABCD123'
}).subscribe(console.log )


//OTRA FORMA CAMBIANDO LA PALABRA METHOD
ajax({
    url, //url: url,
    method: 'POST', //GET DELETE POST PUT
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Ezequiel'
    }
}).subscribe(console.log)