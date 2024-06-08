import app from './app'


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`App started on port ${PORT}`)
})