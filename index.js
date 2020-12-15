// Write your classes below this line
class Tesla {
  constructor (model) {
    this.maxRange = model.maxRange
    this.acceleration = model.acceleration
    this.storageSpace = model.storageSpace 
    this.seats = model.seats
    this.topSpeed = model.topSpeed
    this.trimLevels = model.trimLevels
    this.weight = model.weight
    this.availableOptions = model.availableOptions
    this.rangeRemaining = this.maxRange
    this.odometer = 0
  }
  applyTrim (trim) {
    
  }
  drive (distance) {
    if (distance > this.rangeRemaining) {
      return 'You do not have enough charge to make it that far!'
    }
    this.odometer += distance
    this.rangeRemaining -= distance
    return `You have successfully driven ${distance} miles, you have ${this.rangeRemaining} miles left.`
  }
  charge (time, superCharge) {
    if (superCharge) {
      let rangeAdded = Math.floor(time / 30)*200 + (time % 30)*(200/30)
      let chargeBill = (time*0.03).toFixed(2)
      if (this.rangeRemaining + rangeAdded > this.maxRange) {
        this.rangeRemaining = this.maxRange
        return `Your Tesla is fully charged! Your account will be charged $${chargeBill}.`
      } else {
        this.rangeRemaining += rangeAdded
        return `Your Tesla has been charged, it now has a range of ${this.rangeRemaining} miles. Your account will be charged $${chargeBill}.`
      }
    } else {
      let rangeAdded = Math.floor(time / 30)*50 + (time % 30)*(50/30)
      if (this.rangeRemaining + rangeAdded > this.maxRange) {
        this.rangeRemaining = this.maxRange
        return `Your Tesla is fully charged!`
      } else {
        this.rangeRemaining += rangeAdded
        return `Your Tesla has been charged, it now has a range of ${this.rangeRemaining} miles.`
      }
    }
  }
}


class ModelS extends Tesla {
  constructor (owner, color, options = []) {
    super(modelSPayload)
    this.owner = owner
    this.installedOptions = options
    this.color = color
  }
}

class Person {
  constructor(fullName, email, bankBalance, driversLicense) {
      this.fullName = fullName;
      this.email = email;
      this.bankBalance = bankBalance;
      this.driversLicense = driversLicense;
      this.trips = []
      this.teslas = []
  }
  buyTesla() {
      this.bankBalance -= 60000
      this.teslas.push(new ModelS(this,'blue'))
      return `Congrats on your new tesla purchase.`
  }
  work() {
      this.bankBalance += 10000
  }
  planTrip(dist, dest) {
  this.trips.push(new Trip(dist, dest,this.teslas[0]))
  return `Trip added`
  }
}

class Trip {
  constructor(distance, destination,car) {
      this.distance = distance
      this.charges = []
      this.destination = destination
      this.car = car
}
  checkValidity() {
      if (this.distance > this.car.rangeRemaining) {
          return `Tesla range is lower than the distance increase range or editTrip.`
      }
      return `Seat belts on! ${this.destination} is within range.`
  }
  calculateEstTime() {
     return `${(this.distance / 45).toFixed(2)} Hrs` 
  }
  editTrip(newTime) {
      this.distance = newTime
      return `Distance saved checkValidity.`
  }
  end () {
      return `${this.destination} Reached, checkValidity for round trip. Updating chargeLocations`
  }
  charge(mins) {
      this.charges.push({
        Power: '440V',
        Duration: mins,
        Time: new Date ()
      })
    return  this.car.charge(mins,true)
  }  
}
// Write your data (instances and method calls) below this line
console.log("Welcome to <<Tesla>>!")
let modelSPayload = {
  maxRange: 387,
  acceleration: 2.3,
  storageSpace: 28,
  seats: 5,
  topSpeed: 163,
  weight: 4929,
  availableOptions: [],
  trimLevels: {
    "Performance": {
      acceleration: 2.3,
      maxRange: 387,
      weight: 4929
    },
    "Long Range Plus": {
      acceleration: 3.7,
      maxRange: 402,
      weight: 4815
    }
  }
}

let testCar = new ModelS('SGS', 'Blue')
let testcar = new Trip(200,'lower Manhathan',testCar)
let testperson = new Person('testperson','tesrperson@me.com',100000,true)