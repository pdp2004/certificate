import {Router} from 'express';

import {certificates , certificate , update} from "../controller/certificate.controller.js";

export default Router()
.get('/certificates', certificates)
.post('/certificates', certificate)
.put('/certificates/:id',update)
