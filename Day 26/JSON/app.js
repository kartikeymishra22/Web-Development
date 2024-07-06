// let jsonRes = '{"fact":"In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.","length":95}'


// let validRes = JSON.parse(jsonRes);

// console.log(validRes);

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.log(err);
})