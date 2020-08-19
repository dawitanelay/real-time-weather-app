// const  response  = require("express")
// const fetch = require('node-fetch')

console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search= document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')




weatherForm.addEventListener('submit',(e)=>{
e.preventDefault()
const addrss= search.value

messageOne.textContent = 'Loadding...'

fetch('/weather?address='+addrss).then((response) => {
    response.json().then((data) => {
        if (data.error) {
          return  messageOne.textContent = data.error
            //console.log(data.error)
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forcastdata
            // console.log(data.location)
            // console.log(data.forcastdata)
        }
    })
})


   
})