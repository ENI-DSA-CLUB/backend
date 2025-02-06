const express = require("express")
const cors = require('cors')
const PORT = 3000
const app = express() ;
app.use(cors());
app.use(express.json())
app.post('/chall1',(req,res)=>{ 
    const sol = req.body.sol ;

    Naissance = new Date('2007-03-27') ;
    Now = new Date() ;
    const dif = Now - Naissance
    const jVie = Math.floor(dif/(1000*3600*24))
    console.log(jVie)
    if(jVie == parseInt(sol)){
        res.status(200).json({statut:true})
    }else{
        res.status(200).json({statut:false})
    }
})

app.post('/chall2',(req,res)=>{
    const sol = req.body.sol ;
    const cell = 536870912
    result = parseInt(Math.log2(cell))
    console.log(result)
    if(result == parseInt(sol)){
        res.status(200).json({statut:true})
    }else{
        res.status(200).json({statut:false})
    }
})

app.post('/chall3',(req,res)=>{
    const sol = req.body.sol ;
    const cell = 122005169878
    
    console.log(cell)
    if(cell == parseInt(sol)){
        res.status(200).json({statut:true})
    }else{
        res.status(200).json({statut:false})
    }
})

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});