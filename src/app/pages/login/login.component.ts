import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    username:'',
    password:''
  }

  router = inject(Router);

    onlogin() {
      if(this.loginObj.username=="admin" && this.loginObj.password == "ritik"){
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert("wrong credential")
      }
    }

}
