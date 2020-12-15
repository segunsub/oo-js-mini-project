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
  constructor(fullName, Email, bankBalance, driversLicense) {
      this.fullName = fullName;
      this.Email = Email;
      this.bankBalance = bankBalance;
      this.driversLicense = driversLicense;
  }
  Buytesla() {
      
  }
  Work () {
      
  }
  takeATrip() {
      
  }
  planTrip() {
      
  }
}

class Trip {
  constructor(Distance,Destination) {
      this.Distance = Distance
      this.Charges = []
      this.Destination = Destination
  }
  checkValidity(Tesla) {
      if (this.Distance > Tesla.MaxRange) {
          return `Tesla range is lower than the distance increase range or editTrip.`
      }
      return `Seat belts on Distance is within Range.`
  }
  calculateEstTime(Tesla) {
     return this.Distance % Tesla.TopSpeed
  }
  editTrip(newTime) {
      this.Distance = newTime
      return `Distance saved checkValidity.`
  }
  Arrive() {
      return `${this.Destination} Reached checkValidity for round trip. Updating chargeLocations`
  }
  Charge(Hrs) {
      if (Hrs < 10) {
          this.charges.push({
              Power: '50KW'
              Duration: Hrs
              Time: new Date ()
          })
          return `Tesla charged for ${Hrs}Hrs insufficient for full charge`
      }
      this.charges.push({
              Power: '50KW'
              Duration: Hrs
              Time: new Date ()
          }
         return `Tesla charged for ${Hrs}Hrs. Fully Charged`
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