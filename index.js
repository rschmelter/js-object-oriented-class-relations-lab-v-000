let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }
}

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }
}
class Trip {
  constructor(driver, passenger){

    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId

    store.trips.push(this)

    // passenger(){
    //   return store.passengers.find(passenger => passenger.id === this.passengerId)
    // }
  }
}
