import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import rolRoutes from './src/routes/rol.js'
import universidadRoutes from './src/routes/universidades.js'
import personaRoutes from './src/routes/persona.js'
import carreraRoutes from './src/routes/carrera.js'

let app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
    return res.json({result: 'OK'})
})

app.use("/rol", rolRoutes);
app.use("/Universidad", universidadRoutes)
app.use("/Persona", personaRoutes)
app.use("/Carrera", carreraRoutes)



app.listen(3001, () => {
    console.log('app is running!')
})
