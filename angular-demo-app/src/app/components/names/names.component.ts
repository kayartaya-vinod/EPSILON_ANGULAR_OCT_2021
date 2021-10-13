import { Component } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {

  // friends: Array<string> = [];
  friends: string[] = ['Vinod', 'Shyam', 'Naveen', 'Harish', 'Satya', 'Daya'];

  deleteFriend(index: number): void {
    this.friends.splice(index, 1);
  }
}
