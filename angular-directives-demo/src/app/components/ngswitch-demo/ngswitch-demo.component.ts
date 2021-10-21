import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {

  userChoice: number = 1;
  classNames = ['text-center', 'text-success']
  customStyles = { border: '3px solid green', padding: '20px', 'border-radius': '15px' }

  constructor() { }

  ngOnInit(): void {
  }

  changeUserChoice(userChoice: number) {
    this.userChoice = userChoice;
  }

}
