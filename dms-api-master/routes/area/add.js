var connection = require('../../config');
const express = require('express');
const router = express.Router();
const auth= require('../auth');

//this code  will add new Area
router.post('/',  (req, res, error)=> {
    var area = {
                 "area_name": req.body.area_name,
                 "area_brief": req.body.area_brief,
                 "area_status":1
                }

    connection.query('select  count(area_name) as count from area where area_name=? ',[area.area_name], (error,results) => {
        if(results[0].count>0)
        {
            
            connection.query(`update area set area_status="1" where area_status= "0" AND area_name=?`,[area.area_name], (error) =>{
                if(!error){
                res.json({
                    status:true,
                    message:"Area is already added"
                })
               
                }
                else{
                    res.json({
                        status:false,
                        message:"there are some error 1 with query"
                    })
                    console.log(error)
                }
            })
        } 
  else{
    connection.query('insert into area set ?', area, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error 2 with query'
            })
            console.log(error);
        } else {
            res.json({
                status: true,
                data: results,
                message: 'Area added sucessfully'
            })
            console.log(results);
        }
    });
  }
    })
});

module.exports = router;

// var connection = require('../../config');
// const express = require('express');
// const router = express.Router();

// //this code  will add  Area
// router.post('/',  (req, res)=> {
//     var area = {
//         "area_name": req.body.area_name,
//         "area_brief": req.body.area_brief,
//          "area_status":1
//     }

//     connection.query('insert into area set ?', area, function (error, results, fields) {
//         if (error) {
//             res.json({
//                 status: false,
//                 message: 'there are some error with query'
//             })
//             console.log(error);
//         } else {
//             res.json({
//                 status: true,
//                 data: results,
//                 message: 'Area added sucessfully'
//             })
//             console.log(results);
//         }
//     });
// });

// module.exports = router;