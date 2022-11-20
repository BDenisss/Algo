class Personnage {
    constructor(name, sanity) {
        this.name = name;
        this.sanity = sanity;
        this.SwitchTaxi = 0;
    }

    SanityDamage() {
        let val =music[getRandomMusic()]
        if(val=="Anissa - Wejdene"){
            console.log("----------------------------------------------------------------------------")
            this.sanity--
            this.SwitchTaxi++
            console.log("Il reste " + this.sanity + " hp de santé mental " + "à " + this.name + " à cause de: " + val + "...");
            console.log("----------------------------------------------------------------------------")
        } else {
            console.log('Tout va bien car: ' + val + ' à la radio !');
        }

    }

}

class Trajet {
    constructor(radio, redLights, SwitchTaxi) {
        this.radio = radio;
        this.redLights = redLights;
    }

    Tour(){
        this.redLights--;        

    }

}

let trajet = new Trajet("Skyrock", 30, 0);

let john = new Personnage("John", 10, 30);

let music = ["Anissa - Wejdene", "Zoo - Kaaris", "17% - Leto", "BLACK & MORTIMER - Luther", "Intro - Freeze Corleone"];

function getRandomMusic() {
    return Math.floor(Math.random() * music.length); 
}


while (trajet.redLights >= 0) {
trajet.Tour();
john.SanityDamage();
}

if(john.sanity == 0) {
    console.log('----------------------------------------------')

    console.log(john.name + " n'a pas pu supporter, il a explosé à cause de Wejdene...");
} else {
    console.log('----------------------------------------------')
    console.log(john.name + ' a bien passé ' + ' les 30 feux rouges, ' + 'il a changé ' + john.SwitchTaxi + ' fois de taxi !')
}




