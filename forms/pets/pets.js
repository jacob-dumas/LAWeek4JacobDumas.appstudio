let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withSal = petNames.concat("Sal")
petNames.push("Sal")
console.log(petNames)
console.log(`The third pet is named ${petNames[2]}.`)
console.log(`The arry has ${petNames.length} names in it.`)
petNames.pop()
console.log(petNames)