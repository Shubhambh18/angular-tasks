import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  user: Credential = {userName:'' , passWord:''};
  status: string;
  constructor() { }

  ngOnInit() {
  }
  validate(){
    console.log(this.user.userName);
    console.log(this.user.passWord);

    if(this.user.userName==='india' && this.user.passWord ==='india')
    {
      this.status='Valid';
    }
    else{
      this.status='invalid User';
    }
  }

}
