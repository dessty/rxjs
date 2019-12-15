import { Component } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON, Observer } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements Observer {

  lessonsCounter = 0;

  constructor() {
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify:lessonText => this.lessonsCounter += 1
    });
  }

  notify(data: Lesson[]) {
    console.log("counter component receives data...")
    this.lessonsCounter = data.length;
  }
}
