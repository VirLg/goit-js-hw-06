// function fnA() { 
//     return document.querySelectorAll(".categories")
// }

// console.log(fnA())



const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
  
    addPotion(newPotion) {
        const idx = this.potions.findIndex(potion => potion.name === newPotion.name)
        
        if (!~idx) {
            this.potions.push(newPotion)
        }
      
        `Error! Potion ${newPotion.name} is already in your inventory!`
    
  
    }
}

const a = atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.dir(atTheOldToad);