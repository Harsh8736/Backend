import express from 'express';
const app =express();

app.get('/',(request,response) =>{
    response.send('Hello ce');
});
app.get('/api/:name/:age',(request,response) =>{
    response.send(`Hello ${request.params.name} and your age is ${request.params.age}`);
})
// http://localhost:3000/api/Birju/22
// http://localhost:3000/api?name=Harsh&rollno=26
app.get('/api',(request,response) =>{
   try{
    const {name="gaga",rollno=500} =request.query;
   
    if (!name){
         response.send({
            status:404, message: "Name debe ki na"
         });
    }
    else{
        response.send( `Hello Dear ${name} and my roll no. is ${rollno}`);
    }
   }catch(error){
    console.log(error.message)
   }
})
const port =3000;
app.listen(port,() =>{
    console.log(`Server is running at ${port}`)
});