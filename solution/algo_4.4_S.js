/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];

const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

// function updateInventory(newInv, currInv) {
//     for(const newItem of newInv) {
//         let itemFound = false
//         for(const currentItem of currInv) {
//             if(newItem.name == currentItem.name) {
//                 currentItem.quantity += newItem.quantity
//                 itemFound = true
//                 break
//             }
//         }

//         if(itemFound == false) {
//             currInv.push(newItem)
//         }
//     }
//     return currInv
// }

function updateInventory(newInv, currInv) {
    for(let i=0; i < newInv.length; i++) {
        const newItem = newInv[i]
        let itemFound = false
        for(let j=0; j < currInv.length; j++) {
            const currentItem = currInv[j]
            if(newItem.name == currentItem.name) {
                currentItem.quantity += newItem.quantity
                itemFound = true
                break
            }
        }

        if(itemFound == false) {
            currInv.push(newItem)
        }
    }
    return currInv
}

console.log(updateInventory(newInv1, currInv1))
