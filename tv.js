const form = document.querySelector('form');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    try{
        const search = form.elements.q.value;
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
        const image = res.data[0].show.image.medium;
        const img  = document.createElement('img');
        img.src = image;
        form.append(img);
    }
    catch(e){
        console.log("ERROR!!!:",e);
    }
    
})