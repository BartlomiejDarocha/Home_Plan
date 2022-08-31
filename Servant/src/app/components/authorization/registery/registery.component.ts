import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailPattern } from 'src/app/models/patterns/patterns';

@Component({
  selector: 'app-registery',
  templateUrl: './registery.component.html',
  styleUrls: ['./registery.component.scss']
})
export class RegisteryComponent implements OnInit {
  // @ViewChild('resgisteryForm') public resgisteryForm: NgForm;
  public emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  public registeryData = {
    email: '',
    password: '',
    passwordRepeat: '',
  }

  ngOnInit(): void {
  }

  public registery() {
    // console.log(this.resgisteryForm, 'registery form');    
  }

}
