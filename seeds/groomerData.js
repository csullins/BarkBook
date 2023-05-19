// Enter data in Groomer's table

const { Groomer } = require('../models');
const groomerdata =
[
  {
  
    "name":"Jack",
    "profilePicture": "profile1.png",
    "email": "Jack@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",
    
  },
  {
    "name":"Simon",
    "profilePicture": "profile2.png",
     "email": "Simon@gmail.co,",
    "phone":"5123344545",
    "motto":"likes pet",

  },
  {
    "name":"Chirst",
    "profilePicture": "profile3.png",
    "email": "christ@gmail.co,",
    "phone":"5127286741",
    "motto":"happy pet",

  },
  {
    "name":"Jony",
    "profilePicture": "profile4.png",
    "email": "jony@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",
      },
  {
    "name":"Jay",
    "profilePicture": "profile5.png",
    "email": "jay@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",

  },
  {
    "name":"Fami",
    "profilePicture": "profile6.png",
    "email": "Fami@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",
  
  },
  {
    "name":"Gigi",
    "profilePicture": "profile7.png",
     "email": "gigi@gmail.co,",
    "phone":"5121113234",
    "motto":"likes pet",

  },
  {
    "name":"Han",
    "profilePicture": "profile8.png",
     "email": "han@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",

  },
  {
    "name":"Nency",
    "profilePicture": "profile9.png",
    "email": "Nency@gmail.co,",
    "phone":"5128896754",
    "motto":"likes pet",

  },
  {
    "name":"Jay",
    "profilePicture": "profile10.png",
     "email": "jay@gmail.co,",
    "phone":"5121123423",
    "motto":"likes pet",

  },
  {
    "name":"Khyti",
    "profilePicture": "profile11.png",
     "email": "khyti@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",

  },
  {
    "name":"Lalo",
    "profilePicture": "profile12.png",
     "email": "lalo@gmail.co,",
    "phone":"512112456",
    "motto":"likes pet",

  },
 

];

const seedGroomer = () => Groomer.bulkCreate(groomerdata);


module.exports = seedGroomer;