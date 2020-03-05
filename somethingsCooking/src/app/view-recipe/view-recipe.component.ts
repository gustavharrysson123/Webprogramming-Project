import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  name: string;
  // category: string; 
  // numberOfPeople: number;  
}

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {

  name: string;
  // category: string; 
  // numberOfPeople: number;


  constructor(public dialog: MatDialog) {}
   openDialog(): void{
     const dialogRef = this.dialog.open(modalWindow, {
        height: '400px',
        width: '700px',
       // data: {name: this.name, category: this.category, numberOfPeople: this.numberOfPeople},
        data: {name: this.name}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.name = result;
        console.log('Name input: ' + this.name);
        // console.log('Category input: ' + this.category);
        // console.log('NumberOfPeople input: ' + this.numberOfPeople);
        console.log(`Dialog result: ${result}`); // Pizza!
      });
    }

    
}


@Component({
     selector: 'app-enter-recipe',
     templateUrl: './enter-recipe.html',
})
export class modalWindow {
  constructor(
    public dialogRef: MatDialogRef<modalWindow>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  close() {
    console.log('Close');
    console.log('name: ' + this.data.name);
    this.dialogRef.close();
  }

  save(){
    console.log('Save');
    this.dialogRef.close(this.data.name);
  }

  add(){
    console.log('Add');
  }
}



  
