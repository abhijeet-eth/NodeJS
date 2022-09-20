const bioData = {
    name: "ABhijeet",
    age: 26,
    city: "Ranchi"

};

const jsonData = JSON.stringify(bioData)
console.log(jsonData)

const objData = JSON.parse(jsonData)
console.log(objData)