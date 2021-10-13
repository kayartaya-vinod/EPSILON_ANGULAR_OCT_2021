import Vehicle from "./vehicle";

export default class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }
    stop(): void {
        console.log("Car stopped");
    }
    moveForward(): void {
        console.log("Car moving ahead");
    }
    moveBackword(): void {
        console.log("Car moving in reverse direction");
    }

    honk(): void {
        console.log("Beeeeeeeep");
    }

}