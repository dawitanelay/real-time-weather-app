const path = require('path')
const express = require('express')
const hbs = require('hbs')

const gecode = require('./utils/gecode')

const forcast = require('./utils/forcast')


// defined pathe for express config
const publicDir = path.join(__dirname,'../public')
const viewDir = path.join(__dirname,'../teamplate/views')
const paritalDir = path.join(__dirname,'../teamplate/partials')

const app = express()
// setup for handlebar and view engine
app.set('view engine', 'hbs')
app.set('views',viewDir)
hbs.registerPartials(paritalDir)

// setup static directry 
app.use(express.static(publicDir))

app.get('',(req,res)=>{

res.render('index',{
    title:'Weather app',
    name:'created by dawit'})
})



app.get('/weather',(req,res)=>{
 
    if(!req.query.address)

    {
     return res.send({
         error:'You must provide a search term'
     })

    }
   
       gecode(req.query.address,(error,{latitude,longtidue,location}={})=>{

        if(error)
        {
            return res.send({error})
        }

        forcast(latitude,longtidue,(error,forcastdata)=>{

            if(error)
            {
              return  res.send({ error})
            }
         res.send({forcastdata,location,address:req.query.address})
        })


       })




    // res.send({
    //     forcast:27,
    //     location:req.query.address
    // })
})








app.get('/about',(req,res)=>{

    res.render('about',{
        title:'About me',
        name:'created by dawit'})
    })





app.get('/help',(req,res)=>
{
 res.render('help',{
     title:'Help',
     name:'Some Usefull information'})
})




app.get('/help/*',(req,res)=>{

    res.render('404',{
        title:'404',errormessage:'Help search not found'})
})




app.get('*',(req,res)=>{

    res.render('404',{
        title:'404',errormessage:'Page not found'})
})




app.listen(3000,()=>{

    console.log('Server is up on port 3000')

})