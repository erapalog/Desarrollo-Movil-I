const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./config/database.js');
const Alumno = require('./models/Alumno.js');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());


sequelize.sync().then(() => {
    console.log('Database synced');
  }).catch((err) => {
    console.error('Error syncing database:', err);
  });

//Metodo GET
app.get('/alumnos', async (req, res) => {
    
    try {
      //Sequlize
      const items = await Alumno.findAll();

      res.status(200).send(items);
    } catch (error) {
      res.status(500).send(error);
    }
    
});

app.post('/alumnos', async (req, res) => {
    try {
      const item = await Alumno.create(req.body);
      res.status(200).send(item);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

  app.put('/alumnos/:id', async (req, res) => {
    try {
      const item = await Alumno.findByPk(req.params.id);
      if (!item) {
        return res.status(404).send('Item not found');
      }
      await item.update(req.body);
      res.status(200).send(item);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Eliminar un ítem por ID
  app.delete('/alumnos/:id', async (req, res) => {
    try {
      const item = await Alumno.findByPk(req.params.id);
      if (!item) {
        return res.status(404).send('Item not found');
      }
      await item.destroy();
      res.status(200).send('Item deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  });

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  