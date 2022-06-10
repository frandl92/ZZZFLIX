import { MediaInterface } from './../../models/mediaInterface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
@Input() public pelis!: MediaInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
