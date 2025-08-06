import {Router} from 'express';

import {certificates , getCertificate , certificate , update , deleteCertificate , viewCertificate} from "../controller/certificate.controller.js";

export default Router()
.get('/certificates', certificates)
.get('/certificate/:id', getCertificate)
.post('/certificates', certificate)
.put('/certificates/:id',update)
.delete('/delete/:id',deleteCertificate)
.get('/view/:certId',viewCertificate)