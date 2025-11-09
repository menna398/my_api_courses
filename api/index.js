const express = require("express");

const app = express();

// const port = 7000; // el try2a el 3adya
require("dotenv").config(); //from .env
const port = process.env.port || 7000; //34an mygb4 error 3la github 34an ana ha3ml ll .env gitignore

const coursesRouting = require("../routes/courses");

app.use(express.json()); // ykraa2 el data mn el front + lazem yb2a abl el routing

// let check = true;

// // function getCheck (req,res,next) { //validat hal dah el ragel bta3 el front end bta3yy wla l2a
//     if(check){
//         next()
//     }else{
//         res.status(401).json({
//             message : "middleware syas no"
//         });
//     }
// }

// app.get('/', getCheck ,(req,res)=>{

//     res.status(200).json("real req says yes");

// })

app.use("/api/v1/courses", coursesRouting);

app.use((req, res) => {
  //law el route 8alat
  res.status(401).json({
    message: "wrong routing",
    data: null,
  });
});

app.use((err, req, res, next) => {
  //law fy suntax error y3redo b 4kl ahla
  // dy 7aga mohma lek ka developer 34an t3raf eh el error
  // bsss abl ma tslmo le el front lazem nms7o
  res.status(500).json({
    message: err.message,
    data: null,
  });
});

app.listen(port, () => {
  console.log(`server runing on ${port}`);
});


module.exports = app; //importanttt