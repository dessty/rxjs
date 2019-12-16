import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { store, Observer } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements Observer, OnInit {
  ngOnInit(): void {
    store.subscribe(this)
  }

  // member variable
  lessons: Lesson [] = [];

  next(data: Lesson[]) {
    console.log("Lessons list component receives data")
    this.lessons = data;
  }

  toggle(toggled:Lesson){
    store.toggleLessonViewed(toggled);
  }

  delete(deleted:Lesson){
    store.deleteLesson(deleted);
  }

}
