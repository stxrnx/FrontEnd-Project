import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  goTo(){
    this.router.navigate(['/home'])
  }
}
