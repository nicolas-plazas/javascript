const person = () => {
    // Variable privada
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
}

newPerson  = person();
console.log(newPerson.getName());
newPerson.setName('Nicolás');
console.log(newPerson.getName());

// GETTER Y SETTER
const person = () => {
    let name = 'Name'
  
    return {
      get name () {
        return name
      },
  
      set name (value) {
        name = value
      }
    }
  }
  
  const newPerson = person()
  console.log(newPerson.name)
  newPerson.name = 'Nicolás'
  console.log(newPerson.name)