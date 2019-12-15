import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit, Observer {

  // member variable 
  lessons: Lesson [] = [];

  constructor(){
    // register before top level element init. That's why it cannot be in ngOnInit
    console.log("lesson list component is registered as observer");
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE ,this)
  }

  ngOnInit() {

  }

  notify(data: Lesson[]) {
    console.log("Lessons list component receives data")
    this.lessons = data;
  }

}
