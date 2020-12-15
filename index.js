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
  }
  Buytesla() {
      this.bankBalance -= 60000
  }
  Work() {
      this.bankBalance += 10000
  }
  planTrip() {
      
  }
}

class Trip {
  constructor(distance,destination) {
      this.distance = distance
      this.charges = []
      this.destination = destination
  }
  checkValidity(Tesla) {
      if (this.distance > Tesla.MaxRange) {
          return `Tesla range is lower than the distance increase range or editTrip.`
      }
      return `Seat belts on Distance is within Range.`
  }
  calculateEstTime(Tesla) {
     return this.distance % Tesla.TopSpeed
  }
  editTrip(newTime) {
      this.distance = newTime
      return `Distance saved checkValidity.`
  }
  end() {
      return `${this.destination} Reached, checkValidity for round trip. Updating chargeLocations`
  }
  charge(Hrs) {
      if (Hrs < 10) {
          this.charges.push({
              Power: '50KW',
              Duration: Hrs,
              Time: new Date ()
          })
          return `Tesla charged for ${Hrs}Hrs insufficient for full charge`
      }else {
      this.charges.push({
              Power: '50KW',
              Duration: Hrs,
              Time: new Date ()
          })
          return `Tesla charged for ${Hrs}Hrs. Fully Charged`
  }
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