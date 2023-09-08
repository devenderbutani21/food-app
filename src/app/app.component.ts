import { Component, OnInit } from '@angular/core';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  pizzas: any[] = [];

  constructor(private service:PizzaService) {}
  
  ngOnInit(): void {
      this.service.getPizzas()
      .subscribe(
        pizzas => {
          this.pizzas = pizzas;
        });
  }
  
}
