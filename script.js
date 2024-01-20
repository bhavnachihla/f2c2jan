 let arr = [
    { id: 1, name: 'john', age: '18', profession: 'developer' },
    { id: 2, name: 'jack', age: '20', profession: 'developer' },
    { id: 3, name: 'karen', age: '19', profession: 'admin' },
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
        data.forEach((item) => item.profession == "developer" ? console.log(item) : null
        );
 }
  
  function addData() {
    let name = prompt("Enter Your Name");
    let age = prompt("Enter Your Age");
    let profession = promt("Enter Your Profession");
    data.push({
        name,
        age,
        profession,
    });
    console.log("Here is the updated data",data);
  }
  
  function removeAdmin() {
    
    data = data.filter((item) => item.profession !== "admin");
    console.log("Here is the updated data", data);

  }
  
  function concatenateArray() {
    let data2 = [
        { name : "Bhavna", age : 24 , profession : "developer"},
        { name : "Haresh", age : 25 , profession : "admin"},
    ];
    let combinedArray=data.concat(data2);
    console.log("Here is the concatenated array:",combinedArray);

  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }