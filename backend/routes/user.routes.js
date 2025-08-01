import {Router} from 'express';

import {getUser,postUser,login,auth} from "../controller/user.controller.js";

export default Router()
.get('/get', getUser)
.post('/post', postUser)
.post('/login', login)
.get('/auth',auth);