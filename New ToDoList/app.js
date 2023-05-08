console.log("Connected");
let text = prompt("What do you want to do?");
let arr = ["Tere bin ghorib"];
while (text !== "quit") {
  if (text === "new") {
    let newToDo = prompt("Enter a new To DO.");
    arr.push(newToDo);
    console.log("New To Do Added!");
  } else if (text === "list") {
    console.log("***************************");
    for (let ToDo of arr) {
      console.log(ToDo);
    }
    console.log("***************************");
  } else if (text === "delete") {
    let index = parseInt(prompt("Enter index of the To Do."));
    arr.splice(index, 1);
    console.log("Deleted!!");
  } else {
    text = prompt("Put a valid input.");
  }
  text = prompt("What do you want to do?");
}
console.log("Quitted!");
