const mongoose = require("mongoose")

const username = "El-turco"
const password = encodeURIComponent("12345emre")

const db = "Users"

const SecretKey ="boX9Y1XI3rSLgFscXwJG/hXb/HxZgUiKguHWqPLkqVmjHFHoZc/9g+2FCQcMaudVzeEEa0ZJymcrplxEV8Sf6tQVwUr38GM7UkBpS/uhViB+PDsIVo1mVI432n+QMFXERTkn2PHexSAsV397xNtnllXP7O83FpevznZvRnShOoUwCOVSlcdAjEjb1ms3uxQE+gDCqg6SlFedqTs8+5Rf3hdp+5fuhbcbwSba2/ZayH3SPdXIsG02nXqj63bl0Beb1pDvYpKlWl6ndXS4YsSCRsWCuERLqrnYi7+cQiY85z1jAiSpRSo9xrQC3md7JT1Vy+fFSDmc04EtiVEbK1p1jQ==";


const Connect = mongoose.connect(`mongodb+srv://galatasaray22100:${password}@users.ateozz0.mongodb.net/?retryWrites=true&w=majority&appName=Users`)
.then(() => {console.log("Conection mongo db ")}).catch((err) => {console.log(err)})


module.exports = {Connect,SecretKey,db}


