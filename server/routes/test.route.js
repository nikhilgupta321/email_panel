const express = require("express");

const router = express.Router();

const object = [
  {
    no: 1,
    Category: "Multi",
    Type: "Normal",
    Subject: "Management",
    Country: "Russian",
    Link: "https://www.vniigenjournal.ru/jour/issue/archive",
    UpdateBy: "Nitin",
    LastUpdate: "1",
    UpdateOn: "25-Jul-24",
    Comment: "Nice",
    IDM_working: "yes",
    CreatedBy: "Nitin",
  },
  {
    no: 5,
    Category: "Test",
    Type: "not Normal",
    Subject: "State",
    Country: "India",
    Link: "https://www.vniigenjournal.ru/jour/issue/archive",
    UpdateBy: "Vinit",
    LastUpdate: "5",
    UpdateOn: "25-Jul-24",
    Comment: "Not Nice",
    IDM_working: "Not",
    CreatedBy: "Nitin",
  },
  {
    no: 1,
    Category: "Multi",
    Type: "Normal",
    Subject: "Management",
    Country: "Russian",
    Link: "https://www.vniigenjournal.ru/jour/issue/archive",
    UpdateBy: "Nitin",
    LastUpdate: "1",
    UpdateOn: "25-Jul-24",
    Comment: "Nice",
    IDM_working: "yes",
    CreatedBy: "Nitin",
  },
  {
    no: 1,
    Category: "Multi",
    Type: "Normal",
    Subject: "Management",
    Country: "Russian",
    Link: "https://www.vniigenjournal.ru/jour/issue/archive",
    UpdateBy: "Nitin",
    LastUpdate: "1",
    UpdateOn: "25-Jul-24",
    Comment: "Nice",
    IDM_working: "yes",
    CreatedBy: "Nitin",
  },
  {
    no: 1,
    Category: "Multi",
    Type: "Normal",
    Subject: "Management",
    Country: "Russian",
    Link: "https://www.vniigenjournal.ru/jour/issue/archive",
    UpdateBy: "Nitin",
    LastUpdate: "1",
    UpdateOn: "25-Jul-24",
    Comment: "Nice",
    IDM_working: "yes",
    CreatedBy: "Nitin",
  },
  {
    no: 1,
    Category: "Multi",
    Type: "Normal",
    Subject: "Management",
    Country: "Russian",
    Link: "https://www.vniigenjournal.ru/jour/issue/archive",
    UpdateBy: "Nitin",
    LastUpdate: "1",
    UpdateOn: "25-Jul-24",
    Comment: "Nice",
    IDM_working: "yes",
    CreatedBy: "Nitin",
  },
];


// obje 2 

const obj2=[
  {
    no:1,
    name:"test user",
    email:"testUser@gmail.com",
    password:"hellorohini77",
    status:"Block",
    group:"group3",
    quantity:234,
    data1:34,
    data2:22345,
    data3:343,
    data4:23423,
    createdBy:"vijay",
    createOn:"24-4-21",
  },  {
    no:1,
    name:"test user",
    email:"testUser@gmail.com",
    password:"hellorohini77",
    status:"Block",
    group:"group3",
    quantity:234,
    data1:34,
    data2:22345,
    data3:343,
    data4:23423,
    createdBy:"vijay",
    createOn:"24-4-21",
  },
  {
    no:1,
    name:"test user",
    email:"testUser@gmail.com",
    password:"hellorohini77",
    status:"Block",
    group:"group3",
    quantity:234,
    data1:34,
    data2:22345,
    data3:343,
    data4:23423,
    createdBy:"vijay",
    createOn:"24-4-21",
  },
  {
    no:1,
    name:"test user",
    email:"testUser@gmail.com",
    password:"hellorohini77",
    status:"Block",
    group:"group3",
    quantity:234,
    data1:34,
    data2:22345,
    data3:343,
    data4:23423,
    createdBy:"vijay",
    createOn:"24-4-21",
  }

]

router.get("/test1", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "test route working fine",
    object,
  });
});

router.get('/maillinks',(req,res)=>{
  return res.status(200).json({
    success: true,
    message:"mailLinks working fine",
    obj2,
  })
})

module.exports = router;
