import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store, Observer} from '../event-bus-experiments/app-data'

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements Observer, OnInit{

  lessonsCounter = 0;

  ngOnInit() {
      store.subscribe(this)
  }

  next(data: Lesson[]) {
    console.log("counter component receives data...")
    this.lessonsCounter = data.length;
  }
}
