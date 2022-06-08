/*
  ==== Còdigo de TypeScript
*/

// Se puede en un arreglo decir que tipo de datos recibe puende ser varios

let several: (boolean | string |number) [] =['Bash','Couner','Healing',100];
several.push (true)

let skills: string [] =['Bash','Couner','Healing'];
skills.push ('fly')

// Para trabajar con Objeto lo mejor es trabajar interfaz

interface Personage {
  name: string;
  hp: number;
  skills: string[]
  hometown?: string;

}

const personage: Personage ={
  name:'Harry',
  hp: 100,
  skills: ['Bash','Couner','Healing']
}

personage.hometown = 'Hogwarts';
console.table (personage)
