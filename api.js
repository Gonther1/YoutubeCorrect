const url = 'https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4bac63fd8cmsh87a88b20054d2d2p188bf7jsnb731e215043f',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async(url,options) =>{
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(response);
    console.log(result);
}


// Creacion de tarjetas de videos
 
let urlCanal='https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US'

async(paramet,config)=>{
    let peticion = await fetch (paramet,config) 
    let response = await peticion.json()
    console.log(response);
}