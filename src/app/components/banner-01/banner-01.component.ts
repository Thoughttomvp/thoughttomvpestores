import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-banner-01',
  standalone: true,
  imports:[
    NavigationComponent
  ],
  templateUrl: './banner-01.component.html',
  styleUrl: './banner-01.component.scss'
})
export class Banner01Component {

 scrollTo(className: string):void {
  const elementList = document.querySelectorAll('.' + className);
  const element = elementList[0] as HTMLElement;
  element.scrollIntoView({ behavior: 'smooth' });
}

}
