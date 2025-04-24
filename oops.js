// let dog = {
//     breed: 'Labrador',
//     color: 'black',
//     bark() {
//     console.log('Woof!');
//     }
//    };
//    dog.bark(); 

// class Animal {
//     constructor(name) {
//     this.name = name;
//     }
//    speak() {
//     console.log(`${this.name} makes a noise.`);
//     }
//    }
//    let animal = new Animal('Dog');
//    animal.speak();


// class Car {
//     constructor(brand) {
//     this._brand = brand;
//     }
//    get brand() {
//     return this._brand;
//     }
//    set brand(newBrand) {
//     this._brand = newBrand;
//     }
//    }
//    let myCar = new Car('Ford');
//    console.log(myCar.brand);
//    myCar.brand = 'BMW';
//    console.log(myCar.brand);/

// class Animal {
//     constructor(name) {
//     this.name = name;
//     }
//    speak() {
//     console.log(`${this.name} makes a noise.`);
//     }
//    }
//    class Dog extends Animal {
//     speak() {
//     console.log(`${this.name} barks.`);
//     }
//    }
//    let d = new Dog('Mitzie');
//    d.speak();

class Animal {
    speak() {
    console.log('Animal speaks');
    }
   }
   class Cat extends Animal {
    speak() {
    console.log('Meow');
    }
   }
   class Dog extends Animal {
    speak() {
    console.log('Woof');
    }
   }
   function makeAnimalSpeak(animal) {
    animal.speak();
   }
   makeAnimalSpeak(new Cat());
   makeAnimalSpeak(new Dog());