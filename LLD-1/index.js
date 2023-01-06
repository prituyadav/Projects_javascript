// class Vehicles{

//     constructor(type, regNumber, color){
//         this._type=type;
//         this._regNumber=regNumber;
//         this._color=color;
//     }


//     get type(){
//         return this._type;
//      }
     

//     set type(value){
//         this.type=value;
//     }
// }




// class Car extends Vehicles{
//         constructor(regNumber,color){
//             super("Bike",regNumber,color)
//         }
// }

// class Car extends Vehicles{
//     constructor(regNumber,color){
//         super("Truk",regNumber,color)
//     }
// }

// class Car extends Vehicles{
//     constructor(regNumber,color){
//         super("Bus",regNumber,color)
//     }
// }

// let c1=new Car ("add12","red")
// console.log("c1",c1.type)

// class Slot{
//     constructor(type,number){
//         this.number=number;
//         this.type=type;
//         this._isBooked=false
//     }
//     get isBooked(){
//         return this._isBooked;

    
//     }

//     set isBooked(){
//         this._isBooked=value;
//     }
// }

// class Parkingfloor{
//     constructor(floornumber,maxfloor){
//         this.floornumber=floornumber;
//         this._parkinspots=[];


//         for(let i=0; i<maxfloor; i++){
            // if(i===0){
            //     this._parkingspots.push(new Slot("Truk", i));
//             }
//             else if(i===1){
//                 this._parkingspots.push(new Slot("Bike",i))
//             }
//             else if(i===2){
//                 this._parkingspot.push(new Slot("Car",i))
//             }
//         }
//     0ok

//     }


//     get parkinspotstype=type;
   
// }


// class Parkinglot{
//     constructor(number){
//         this._floors=[];
//         this._numberofFloors=number;

//         for(let i=0; i<number; i++){
//             -this._floors[i]=new ParkingFloor()
//         }
//     }
   
// }

// =============>>>>>>>date=03-June<<<<<<<<<<==========

class Vehicle{
    constructor(type,regNumber,color){
        this._type=type;
        this._regNumber=regNumber;
        this._color=color
    }

    get type(){
        return this._type
    }

    set type(value){
        this._type=value;
    }
}

//Car

class Car extends Vehicle{
    constructor(regNumber,color){
        super("Car",regNumber,color)
    }
}

let c1=new Car("DL-1234","Red")

console.log(c1)


class Bike extends Vehicle{
    constructor(regNumber,color){
        super("Bike",regNumber,color)
    }
}


class Truck extends Vehicle{
    constructor(regNumber,color){
        super("Truck",regNumber,color)
    }
}


/// Slots

class Slot{
    constructor(type,number){
       this._type=type;
       this._number=number;
       this._isBooked=false;
    }

    get type(){
        return this._isBooked
    }

    set type(value){
        this._isBooked=value;
    }
}

//Individual floors

class ParkingFloor{
  constructor(floorNumber,maxSpots){
      this._floorNumber=floorNumber;
      this._parkingSpots=[];

      for(let i=0; i<maxSpots; i++){
        if(maxSpots===0){
            this._parkingSpots.push(new Slot("car",i));
        }
        else if(maxSpots===1){
            this._parkingSpots.push(new Slot("bike",i));
        }
        else{
            this._parkingSpots.push(new Slot("truck",i));
        }

      }
  }

  get parkingSpots(){
      return this._parkingSpots;
  }
}

// let p1=new ParkingFloor(0,3);

// console.log(p1)

//parkinglot or the building

class ParkingLot{
    constructor(number){
        this._floors=[];
        this._numberOfFloors=number;

        for(let i=0; i<number; i++){
            this._floors.push(new ParkingFloor(i,3))
        }
    }

    get numberOfFloors(){
        return this._numberOfFloors;
    }

    get floors(){
        return this._floors;
    }

    parkVehicle(vehicle){
       let slot=this.findSlot(vehicle.type)

       if(slot){
           this.bookSlot(slot);
           let ticket=new Ticket(slot.floorNumber)
       }
    }
==============-o=ppppppppppppo00000000000000000000000000000

    findSlot(type){
        for(let i=0; i<this.numberOfFloors; i++){
            for(let slot of this._floors[i]._parkingSpots){
                if(slot.type==type && !slot.isBooked){
                    return {floorNumber:i, foundSlot:slot};
                }
            }
        }
        return false
    }

    bookSlot(slot){
        slot.slot.isBooked=true;
        console.log("slot has Booked")
        return true;
    }

}

// let pl1=new ParkingLot(3);

// console.log(pl1)

///ticketing=====>

class Ticket{
    constructor(floorNumber,slotNumber){
        this.floorNumber=floorNumber;
        this.slotNumber=slotNumber;
        this.issuedAt= new Date();
    }
}

let t1=new Ticket(3,3)

console.log(t1)


