import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() editMode: boolean;
  @Output() buttonClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    alert('create cua button');
    this.buttonClick.emit('create');
  }
  public edit(): void{
    this.buttonClick.emit('edit');
  }

}
