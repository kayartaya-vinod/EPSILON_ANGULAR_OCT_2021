import Vehicle from './vehicle'
import Car from './car'
import Bike from './bike'

function repairVehicle(v1: Vehicle): void {
    v1.start();
    v1.moveForward();
    v1.moveBackword();
    v1.stop();
}


repairVehicle(new Car());
repairVehicle(new Bike());
