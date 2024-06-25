import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Foody-Frontend';
  darkModeService: DarkModeService = inject(DarkModeService);
  ngOnInit(): void {
    initFlowbite();
  }
}
