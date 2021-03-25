
const request = require('request')
const gecode =(address,callback)=>
{
 const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGF3aXRtZSIsImEiOiJja2R0ZG1qdXkxZ3hmMnpvZDQ3YjB4cnhiIn0.jKwIuR3H7FmnNpEwPjwOog'

 request ({url:url,json:true},(error,{body})=>
 {
     if(error)
     {
         callback('unable to connect to  location serviece')
     }else if(body.features.length === 0) 
     {
        callback('Unable to find location. Try another search.', undefined)
     }
     else
     {
         callback(undefined,{
             latitude:body.features[0].center[1],
             longtitude: body.features[0].center[0],
             location:body.features[0].place_name
         })
     }

 })

}


module.exports = gecode