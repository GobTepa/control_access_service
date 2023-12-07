const { Router } = require('express');

const controlGet = require('./backend/get.control');
const controlPost = require('./backend/control.ingreso');
const controlCount = require('./backend/count.control');

const router = Router();

// Checar si existe usuario
router.get('/access/:id', async (req, res)=>{
    const { id } = req.params;
    res.send(await controlGet.getUser(id));
});

// Insertar su hora de ingreso
router.post('/ingreso', async (req, res)=>{
    const { data } = req.body;
    res.send(await controlPost.control_ingreso(data));
});

// Obtener el total de ingresados
router.get('/total/:form', async (req, res)=>{
    const { form } = req.params;
    res.send(await controlCount.getTotal(form));
});

module.exports = router;