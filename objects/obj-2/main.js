// creating an object inside an object

let parent_obj = {
  name: "mahesh",
  country: "india",
  // creating sub object

  skills: {
    sports: "a class in vollyball",
    strength: "above average",
    learning: "quick learner",
  },
  
};

// calling the sub-object variable

alert(parent_obj.skills.sports);
