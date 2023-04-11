const express=require("express");
const app=express();
app.post(
    "/sumar",
    (req,res)=>{
        console.log("Alguien esta conectadonse a esta ruta")
        res.json("hola");
    }

);
app.post(
    "/restar",
    (req,res)=>{
        const n1=req.body.numero_1;
        const n2=req.body.numero_2;
        const resultado=n1-n2;
        res.json(resultado);

    }
)
app.listen(
    3001,
    ()=>{
        console.log("servidor ejecutandose en el puerto 3001")
    
    }
)