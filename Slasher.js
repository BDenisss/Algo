class Killer {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

}
class Caracteristic{
    constructor(classe , name, PDIE, PD, PDD) {
        this.classe = classe;
        this.name = name;
        this.PDIE = PDIE;
        this.PD = PD;
        this.PDD = PDD;
    } 
}




let killer1 = new Killer('Jason', 100);


SurvivorrName = ["Mike", "Oliver","Mia", "Ava","Charlie"];

let sportif = new Caracteristic("The athlete",SurvivorrName[Math.floor(Math.random() * SurvivorrName.length)], 0.4, 0.4, 0.2);
let blonde = new Caracteristic("The blonde",SurvivorrName[Math.floor(Math.random() * SurvivorrName.length)], 0.3, 0.3, 0.2);
let gros = new Caracteristic("The big one",SurvivorrName[Math.floor(Math.random() * SurvivorrName.length)], 0.4, 0.4, 0.4);
let technicien = new Caracteristic("The engineer",SurvivorrName[Math.floor(Math.random() * SurvivorrName.length)], 0.3, 0.4, 0.2);
let nerd = new Caracteristic("The nerd",SurvivorrName[Math.floor(Math.random() * SurvivorrName.length)], 0.3, 0.4, 0.5);



var allCaracteristic = [sportif, blonde, gros, technicien, nerd];
while (killer1.hp > 0 || allCaracteristic.length == 0){

var survivor = allCaracteristic[0];

var dead = [];




if(allCaracteristic.length == 0) {
    console.log(killer1.name + " a tué tout le monde, il lui restait " + killer1.hp + ' hp' )
    break
}

    if(Math.random() <= survivor.PDIE) {

        dead.push(survivor)
        allCaracteristic.shift();
        console.log(killer1.name + " a tué " + survivor.name + " ...")

    } else {
        killer1.hp -= 10;
        console.log(survivor.name + " a esquivé et infligé 10 points de dégâts à " + killer1.name + ' il lui reste ' + killer1.hp + " hp")
        continue


    } if (Math.random() <= survivor.PDD) {
        killer1.hp -= 15;
        dead.push(survivor)
        allCaracteristic.shift();
        console.log(survivor.name + " est mort mais a infligé 15 points de dégâts à " + killer1.name + " il lui reste " + killer1.hp + ' hp')

    } 
    
}

if (killer1.hp <= 0) {
    console.log(killer1.name + " est mort !")
    console.log("les survivants ont gagné mais RIP à ceux qui sont morts")
} 