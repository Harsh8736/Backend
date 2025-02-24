const http = require('http');
const axios = require('axios');

const server = http.createServer(async(req,res)=>{
    console.log('new request recieved');
    res.writeHead(200,{'Content-type':'text/html'});
    // const response=await fetch("https://dummyjson.com/products");
    // const data=await response.json();

    const response=await axios.get("https://api.github.com/search/users?q=location:ghaziabad");
    const productsdata= response.data.items;
    let frontdata=`<html><head></head><body>`
     productsdata.forEach(product=>{
        frontdata += `<div><img src="${product.avatar_url}"></div>`
    });
    frontdata+= `</body> </html>`
    res.end(frontdata);
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});