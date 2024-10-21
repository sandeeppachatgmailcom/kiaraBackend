
const mongoose = require('mongoose')
const link = 'mongodb+srv://sandeeppachat:w6yGtOSj60IeUvXk@cluster0.s4hqvyg.mongodb.net/kiara?retryWrites=true&w=majority'

function connect (){
    mongoose.connect(link,)
    .then((message)=>{
        console.log(`mongoDb connected `)
    })
    .catch((error)=>{
        console.log(error)
    })
}
mongoose.intialise = connect

module.exports = mongoose

