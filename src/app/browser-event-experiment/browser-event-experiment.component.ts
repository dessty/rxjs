import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiment',
  templateUrl: './browser-event-experiment.component.html',
  styleUrls: ['./browser-event-experiment.component.scss']
})
export class BrowserEventExperimentComponent implements OnInit {

  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById("hover");
    this.hoverSection.addEventListener('mousemove', onMouseMove)
  }

  unsubscribe(){
    console.log("Called unsubscribe()")
    this.hoverSection.removeEventListener('mousemove', onMouseMove)
  }
}



function onMouseMove(ev: MouseEvent) {
    console.log(ev)
}
