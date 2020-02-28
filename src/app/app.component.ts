import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormControl, FormGroup} from '@angular/forms';
import {ShoppingListItem} from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todoForm: FormGroup;
  shoppingForm: FormGroup;

  constructor() {
    this.todoForm = new FormGroup({
      todoInput: new FormControl('')
    });
    this.shoppingForm = new FormGroup({
      shoppingItemInput: new FormControl(''),
      shoppingItemAmount: new FormControl('')
    });
  }

  ShoppingList: ShoppingListItem[] = [
    { title: 'Äpfel', amount: 2 },
    { title: 'Bananen', amount: 3 },
    { title: 'Brot', amount: 1 }
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  addItem() {
    console.log(this.shoppingForm.value.shoppingItemInput, this.shoppingForm.value.shoppingItemAmount);
    this.ShoppingList.push({ title: this.shoppingForm.value.shoppingItemInput, amount: parseInt(this.shoppingForm.value.shoppingItemAmount, 10) });
    console.log(this.ShoppingList);
  }

  deleteItem(shoppingList) {
    console.log(shoppingList);
    const index = this.ShoppingList.indexOf(shoppingList);
    console.log(index);
    if(index > -1) {
      this.ShoppingList.splice(index, 1);
    }
  }

  increaseItem(item) {
    item.amount = item.amount + 1;
    return item.amount;
  }

  decreaseItem(item) {
    item.amount = item.amount - 1;
    return item.amount;
  }
}
