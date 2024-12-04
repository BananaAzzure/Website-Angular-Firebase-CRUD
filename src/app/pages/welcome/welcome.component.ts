import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'Welcome to Our Application';
  subtitle = 'Discover amazing features and start your journey with us';

  features = [
    {
      icon: 'speed',
      title: 'Fast & Efficient',
      description: 'Built with performance in mind for the best user experience'
    },
    {
      icon: 'security',
      title: 'Secure',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: 'devices',
      title: 'Responsive',
      description: 'Works seamlessly across all your devices'
    }
  ];

  getStarted() {
    console.log('Get Started clicked');
  }
}
