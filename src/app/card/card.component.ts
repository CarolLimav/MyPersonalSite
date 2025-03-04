import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() institution!: string;

  ngOnInit() {
    console.log("Título:", this.title);
    console.log("Subtítulo:", this.subtitle);
    console.log("Instituição:", this.institution);
  }
}
