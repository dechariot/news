let newList = [];
let page = 1;
let callAPI=async()=>{
    keyAPI = `d126d06694e64a09bafd65da66600a48`
    let url=`https://newsapi.org/v2/everything?q="technology"&page=${page}&apiKey=${keyAPI}`;

    let data = await fetch(url);
    let result = await data.json();

    newList = newList.concat(result.articles);

    console.log("data",data);
    console.log("json",result);
    console.log("article list", newList);
    // searchBySource();
    render(newList);
}
// let searchBySource = () => {
//     let sourceNames = newList.map((item)=> item.source.name)
//     console.log(sourceNames);
//     let sourceObject = sourceNames.reduce((total,name)=>{
//         console.log(total);
//         //check number of source, name is name of source and total is the object if name in total appear this will ++ in total, else source will be 1 
//         if(name in total){
//             total[name]++;
//         } else {
//             total[name] = 1;
//         }
//         return total;
//     },{})

//     let sourceArray = Object.keys(sourceObject);

//     let htmlForSource =  sourceArray.map((item)=>{
//         `<input onchange="searchBySourceClick()" type="checkbox" id=${item}/>${item}(${sourceObject.item})`
//     }).join('')
//     document.getElementById("sourceArea").innerHTML = htmlForSource;

// }

// let searchBySourceClick = sourceArray.filter(()=>{if(document.getElementById("index").checked == true) {
//     let filterNews = newList.filter((item)=>{
        
//     })
// }else {
//     render (newList);
// }
// })

let onLoadCategory = async() => {
    console.log("Hello")
    let category = document.getElementById("category").value;
    let url = `https://newsapi.org/v2/top-headlines?&category=${category}&apiKey=${keyAPI}`;

    let data = await fetch(url);
    let result = await data.json();

    newList = result.articles;
    render(newList);
}

let render = (newList) => {
    let htmlForNews = newList.map((item)=>{
        
        return `<div style="font-family: 'Asap', sans-serif;" class="d-flex p-2" id="news">
        <div class="row border-secondary">
        <div class="col col-md-6 col-sm-12">
        <img class="img-fluid p-2" src="${item.urlToImage}" alt="">
        </div>
        <div class="col col-md-6 col-sm-12">
        <h2 class="font-weight-bold" id="title"> <a href="${item.url} style="cursor:pointer">${item.title}</a> </h2>
        <p> ${item.description} </p>
        <div style="font-size:0.8rem;">${moment(item.publishedAt).fromNow()}</div>
        <div class="blockquote-footer">${item.source.name}</div>
        </div>
        </div>
    </div>`
    }) 

    document.getElementById("news").innerHTML = htmlForNews;
}
let loadMore =() => {
    page ++;
    callAPI();
}

callAPI();