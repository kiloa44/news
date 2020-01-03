export const getApiData = ()=>{
    fetch("https://api.nasa.gov/planetary/apod?api_key=riqHh2qibqvJIxJEVluADAhgpX4Hqv2We9laCcz8")
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        return(result);
    });
}
