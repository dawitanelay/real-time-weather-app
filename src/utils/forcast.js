const request = require('request')




const forcast =(latitude,longtitude,callback)=>
{
    const url ='http://api.weatherstack.com/current?access_key=393de59bc0e0aff5ee92f61689c92a4d&query=' + latitude +','+ longtitude 
   

    request({url:url,json:true},(error,{body})=>{
     if(error)
     {
        callback('Unable to connect to weather web service ')
     }
     else if(body.error)
     {
        callback('Unable to fined location',undefined)
     } else
     {
        
        callback(undefined, body.current.weather_descriptions + '.  It is currently  ' + body.current.temperature + ' degress out. With  ' + body.current.humidity +' humidity and ' + body.current.cloudcover+' cloudcover .')
        

     }




    })
    

    

}

module.exports = forcast