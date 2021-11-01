
const getImagen = async() => {

    try{
        const apiKey = 'XyFQEf90wE2sE5eBs8t7Hrj17BnEFDdj';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const url = data.image_original_url;
        const img = document.createElement('img');
        img.src = url;
        console.log(data);
        document.body.append(img);
    }
    catch(error){
        console.error(error);
    }
}

getImagen();
