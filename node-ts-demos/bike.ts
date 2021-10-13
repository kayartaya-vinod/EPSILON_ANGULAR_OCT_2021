import Vehicle from "./vehicle";

export default class Bike implements Vehicle {
    start(): void {
        console.log("Bike started");
    }
    stop(): void {
        console.log("Bike stopped");
    }
    moveForward(): void {
        console.log("Bike moving ahead");
    }
    moveBackword(): void {
        console.log("Bike moving in reverse direction");
    }
}