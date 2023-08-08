//For Iteration of data
//-------------------------------//
var Biofor = [{
    name: "Vijayshankar",
    Age: "26",
    dob: "09-07-1995",
    Education: "Mechanical Engineering",
    Year: "2017",
    skills : "CAD"
}];

for (var i=0; i < Biofor.length; i++){
    console.log(Biofor[i]);
}

// For in Iteration of a data
//-------------------------------//
var Bioforin = {
    name: "Vijay",
    Age: "26",
    dob: "09-07-1995",
    Education: "Mechanical Engineering",
    Year: "2017",
    skills : "CAD"
};

for (const key in Bioforin){
    console.log(key + " : "+ Bioforin[key]);
}

// For of Iteration of data
//-------------------------------//
var Bioforof = {
    name: "Vijay",
    Age: "26",
    dob: "09-07-1995",
    Education: "Mechanical Engineering",
    Year: "2017",
    skills : "CAD"
};

for (const key of Object.keys(Bioforof)){
    console.log(key + " : " + Bioforof[key])
}

// For Each Iteration of data
//-------------------------------//
var Bioforeach = {
    name: "Vijay",
    Age: "26",
    dob: "09-07-1995",
    Education: "Mechanical Engineering",
    Year: "2017",
    skills : "CAD"
};
Object.keys(Bioforeach).forEach(key=> {
    console.log(key, " : " + Bioforeach[key]);
});
