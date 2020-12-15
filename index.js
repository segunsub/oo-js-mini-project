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
  constructor(fullName, email, bankBalance, driversLicense) {
      this.fullName = fullName; 
      this.email = email;
      this.bankBalance = bankBalance;
      this.driversLicense = driversLicense;
  }
  Buytesla() {
      
  }
  Work () {
      
  }
  planTrip() {
      
  }
}

class Trip {
  constructor(Distance,Destination) {
      this.Distance = Distance
      this.Chargers = []
      this.Destination = Destination
  }
  checkValidity(Tesla) {
      
  }
  calculateEstTime() {
      
  }
  editTrip() {
      
  }
  Arrive() {
      
  }
}

// Write your data (instances and method calls) below this line
console.log("Welcome to <<Tesla>>!")
