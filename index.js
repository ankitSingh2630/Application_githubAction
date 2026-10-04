import express from 'express'

const app = express();
const PORT= process.env.port ?? 8080

app.get('/',(req,res)=>{
    return res.json({
        mes:'Hello from the Server'
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is listen on PORT ${PORT}`)
})