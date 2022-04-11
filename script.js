// <-------Employee JSON file--------->
const empArray = [
  {
    id: 1,
    name: "kotesh",
    gender: "male",
    position: "Associate",
    empid: "10001",
    doj: "21/09/2019",
    exp: 3,
    location: "Bangalore",
    techno: "React,Js,Css",
  },
  {
    id: 2,
    name: "Ravi",
    gender: "male",
    position: "Associate",
    empid: "10002",
    doj: "21/03/2016",
    exp: 2,
    location: "Chennai",
    techno: "Bigg Data",
  },
  {
    id: 3,
    name: "Babai",
    gender: "male",
    position: "Associate",
    empid: "10003",
    doj: "21/11/2015",
    exp: 4,
    location: "Delhi",
    techno: "AI",
  },
  {
    id: 4,
    name: "John",
    gender: "male",
    position: "Associate",

    empid: "10004",
    doj: "09/01/2020",
    exp: 7,
    location: "Pune",
    techno: "Mission Learing",
  },
  {
    id: 5,
    name: "Arun",
    gender: "male",
    position: "Associate",
    empid: "10005",
    doj: "29/05/2016",
    exp: 2,
    location: "Chennai",
    techno: "React,Js,Css",
  },
  {
    id: 6,
    name: "Shreya",
    gender: "female",
    position: "Associate",

    empid: "10006",
    doj: "20/08/2018",
    exp: 2,
    location: "Bangalore",
    techno: "Java",
  },
  {
    id: 7,
    name: "Anisha",
    gender: "female",
    position: "Associate",

    empid: "10007",
    doj: "22/05/2018",
    exp: 6,
    location: "Coimbatore",
    techno: "Python",
  },
  {
    id: 8,
    name: "Waseem",
    gender: "male",
    position: "Associate",

    empid: "10008",
    doj: "28/04/2018",
    exp: 3,
    location: "Delhi",
    techno: "React,Js,Css,Bootstrap",
  },
  {
    id: 9,
    name: "Dharani",
    gender: "female",
    position: "Associate",
    empid: "10009",
    doj: "01/01/2018",
    exp: 3,
    location: "Pune",
    techno: "python,java",
  },
  {
    id: 10,
    name: "Koushik",
    gender: "male",
    position: "Associate",
    empid: "10010",
    doj: "23/08/2018",
    exp: 3,
    location: "Bangalore",
    techno: "html,js,database",
  },
];

// <-----Custome JSON file------>
// let womanicon =
//   "https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-1/260/19-512.png";
// let menicon =
//   "https://cdn2.iconfinder.com/data/icons/office-and-business-round-set-1/64/6-512.png";
// const empArray = [
//   {
//     Name: "kotesh",
//     designation: "Software Trainee",
//     EmpID: 09901,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "1yrs",
//     WorkLoc: "Bangaluru",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "Ravi",
//     designation: "Project Lead",
//     EmpID: 09902,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "5yrs",
//     WorkLoc: "chennai",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "Balu",
//     designation: "Chief Technology Officer",
//     EmpID: 09903,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "8yrs",
//     WorkLoc: "kurnool",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "John",
//     designation: "Project Manager",
//     EmpID: 09904,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "2yrs",
//     WorkLoc: "mangaluru",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "pinky",
//     designation: "Associate",
//     EmpID: 09905,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "4yrs",
//     WorkLoc: "Bangaluru",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "Rahul",
//     designation: "Associate",
//     EmpID: 09906,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "5yrs",
//     WorkLoc: "chennai",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "Charan",
//     designation: "Associate",
//     EmpID: 09907,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "4yrs",
//     WorkLoc: "kurnool",
//     Technologies: "React,Js,CSS",
//   },
//   {
//     Name: "Koushik",
//     designation: "Senior Consulant",
//     EmpID: 09908,
//     DOJ: "31/xx/xxxx",
//     TotalExp: "8yrs",
//     WorkLoc: "mangaluru",
//     Technologies: "React,Js,CSS",
//   },
// ];
// <---------Function for loading Emp list------->
function callme(empArray) {
  let emplist = document.getElementById("emplist");
  // emplist.style.backgroundColor = "lightblue";
  let flip = true;
  for (let i = 0; i < empArray.length; i++) {
    let obj = empArray[i];
    let templi = document.createElement("li");
    if (flip === true) {
      templi.style.backgroundColor = "#eaeaf8";
      flip = false;
    } else {
      templi.style.backgroundColor = "#ffffff";
      flip = true;
    }
    let val = empArray.indexOf(obj);
    templi.setAttribute("onclick", "empdetail(" + val + ")");
    templi.innerHTML =
      "<p >Name:" + obj.name + "" + "(" + obj.id + ")" + "</p>";
    templi.style.cursor = "pointer";
    templi.style.listStyle = "none";
    emplist.appendChild(templi);
  }
}
callme(empArray);
// <----------Function to Load Employee Details----->
function empdetail(i) {
  let obj = empArray[i];
  document.getElementById("empname").innerHTML = obj.name;
  document.getElementById("empdes").innerHTML = obj.position;
  document.getElementById("empid").innerHTML = obj.id;
  document.getElementById("empdoj").innerHTML = obj.doj;
  document.getElementById("empexp").innerHTML = obj.exp;
  document.getElementById("emploc").innerHTML = obj.location;
  document.getElementById("emptech").innerHTML = obj.techno;
  if (obj.gender === "male") {
    document.getElementById("imgid").src =
      "https://cdn2.iconfinder.com/data/icons/office-and-business-round-set-1/64/6-512.png";
  } else {
    document.getElementById("imgid").src =
      "https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-1/260/19-512.png";
  }
  empdetail2(i);
  return;
}
function empdetail2(i) {
  document.getElementById("empid2").innerHTML = empArray[i].id;
  document.getElementById("empdoj2").innerHTML = empArray[i].doj;
  document.getElementById("empexp2").innerHTML = empArray[i].exp;
  document.getElementById("emploc2").innerHTML = empArray[i].location;
  document.getElementById("emptech2").innerHTML = empArray[i].techno;
  return;
}
