const db = require('./models');

const controller = {};

controller.makeProfile = async (req, res, next) => {
    // write code here
    console.log(req.body)
    queryString = 'INSERT INTO ALLUSERS ('
    try{
        console.log(req.body)
        let query =  await db.query()
    
    next();}
    catch (err) {
      return next(createErr({
        method: 'getCharacters',
        type: err.type ? err.type : 'reading/writing file',
        err: err.err ? err.err : err,
      }));
  }};

module.exports = controller;