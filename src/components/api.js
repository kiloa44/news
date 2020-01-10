
export  const  getApiData = async()=>{
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=riqHh2qibqvJIxJEVluADAhgpX4Hqv2We9laCcz8`);
    const json = await response.json();
    console.log(json);
    return json
}
