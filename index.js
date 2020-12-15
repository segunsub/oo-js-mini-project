// Write your classes below this line
class Tesla {
  constructor (maxRange, acceleration, storageSpace, seats, topSpeed, trimLevels, weight, availableOptions) {
    this.maxRange = maxRange
    this.acceleration = acceleration
    this.storageSpace = storageSpace 
    this.seats = seats
    this.topSpeed = topSpeed
    this.trimLevels = trimLevels
    this.weight = weight
    this.availableOptions = availableOptions
  }
  applyTrim (trim) {
    
  }
}


class ModelS extends Tesla {
  constructor () {
    super(387, 2.3, 28, 5, 163, ['Performance', 'Long Range Plus'], 4929, [])
    this.rangeRemaining = this.maxRange  
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
