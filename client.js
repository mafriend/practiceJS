// {
//  "name": "Potato",
//  "weight": 10,
//  "happiness": 19,
// }
//
// feed - increase weight and happiness
// exorcise - decrease weight and happiness
// play - increase happiness and decrease weight
// bellyrubs - increase happiness

class Pet {
    constructor (name, weight = 10, happiness = 19) {
        this.name = name;
        this.weight = weight;
        this.happiness = happiness;
    }

    feed () {
        this.weight += 3;
        this.happiness += 1;
    }

    exercise () {
        this.weight -= 2;
        this.happiness -= 1;    
    }

    play () {
        this.weight -= 2;
        this.happiness += 3;
    }

    rub () {
        this.happiness += 3;
    }
}

const potato = new Pet('Potato', 20, 200);
const matska = new Pet('Matska');
console.log(potato.name);
// potato = Pet.new('Potato', 10, 19)

let currentPet = matska;

$('.treat-button').click(() => {
    currentPet.feed()
});
$('.play-button').click(currentPet.play);
$('.exercise-button').click(currentPet.exercise);
$('.belly-rub-button').click(currentPet.rub);


