import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {

  firstName: string = "Angular Tutorial"

  currentDate: Date = new Date()
  selectedState: string = " "


  showWelcomeAlert() : void {
    
    alert("Welcome to Angular 19 Tutorial")

  }

  showMessage(message: string) : void {
    alert(message)
  }
}
