// Enter data in Groomer's table

const { Groomer } = require('../models');
const groomerdata =
[
  {
  
    "name":"Jack",
    "profilePicture": "profile1.png",
    "email": "Jack@gmail.com",
    "phone":"512112456",
    "motto":"Life is a canvas, dogs are the art!",
    
  },
  {
    "name":"Simon",
    "profilePicture": "profile2.png",
     "email": "Simon@gmail.com",
    "phone":"5123344545",
    "motto":"Carpe diem that groom!",

  },
  {
    "name":"Chirst",
    "profilePicture": "profile3.png",
    "email": "christ@gmail.com",
    "phone":"5127286741",
    "motto":"Simon says, give me your dog!",

  },
  {
    "name":"Jony",
    "profilePicture": "profile4.png",
    "email": "jony@gmail.com",
    "phone":"512112456",
    "motto":"Dogs are truly the inspiration for everything I do!",
      },
  {
    "name":"Jay",
    "profilePicture": "profile5.png",
    "email": "jay@gmail.com",
    "phone":"512112456",
    "motto":"If your dog's in need of some glamour, I'm the groomer for you.",

  },
  {
    "name":"Fami",
    "profilePicture": "profile6.png",
    "email": "Fami@gmail.com",
    "phone":"512112456",
    "motto":"Dog's best friend",
  
  },
  {
    "name":"Gigi",
    "profilePicture": "profile7.png",
     "email": "gigi@gmail.com",
    "phone":"5121113234",
    "motto":"The limit does not exist!",

  },
  {
    "name":"Han",
    "profilePicture": "profile8.png",
     "email": "han@gmail.com",
    "phone":"512112456",
    "motto":"Luke, I am your real father.",

  },
  {
    "name":"Nency",
    "profilePicture": "profile9.png",
    "email": "Nency@gmail.com",
    "phone":"5128896754",
    "motto":"Beauty is in the eyes of the be-howl-der.",

  },
  {
    "name":"Jay",
    "profilePicture": "profile10.png",
     "email": "jay@gmail.com",
    "phone":"5121123423",
    "motto":"Whenever you have a grooming emergency, my doors are always open.",

  },
  {
    "name":"Khyti",
    "profilePicture": "profile11.png",
     "email": "khyti@gmail.com",
    "phone":"512112456",
    "motto":"No pet too difficult, no groom too tough for Khyti.",

  },
  {
    "name":"Lalo",
    "profilePicture": "profile12.png",
     "email": "lalo@gmail.com",
    "phone":"512112456",
    "motto":"Likes pet",
  },
 

];

const seedGroomer = () => Groomer.bulkCreate(groomerdata);


module.exports = seedGroomer;