const obj= document.querySelector('#main')
obj.addEventListener('input',searchINapi)
const res= document.querySelector('.fetchedResult')

async function searchINapi(e)
{
    const text=e.target.value;
    const param={params:{q:text}}
    const obj=await axios.get('https://api.tvmaze.com/search/shows',param)
    res.innerHTML=""
    console.log(obj)
     for (const key of obj.data) {
        
       const name=key.show.name
       const span=document.createElement('span')
       span.textContent=name
       res.append(span)

     }

}