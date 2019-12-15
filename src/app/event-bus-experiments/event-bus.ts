import * as _ from "lodash";

export const LESSONS_LIST_AVAILABLE = "NEW_LIST_AVAILABLE"
export const ADD_NEW_LESSON = "ADD_NEW_LESSION"

export interface Observer {
  notify(data:any);
}

// we don't want to leak this one to the rest of the application at this point
interface Subject {
  registerObserver(eventType: string, obs:Observer);
  unregisterObserver(eventType: string, obs:Observer);
  notifyObservers(eventType: string, data:any); //data that will be broadcasted to all observers
}


class EventBus implements Subject{

  private observers: {[ key:string ]: Observer[]} = {} // map

  registerObserver(eventType:string, obs:Observer){
    this.observersPerEventType(eventType).push(obs);
  }
  unregisterObserver(eventType:string, obs:Observer){
    // using lodash utility library: useful to manipulate data and arrays
    // only remove the element from the observers array if is founds in the list of observers
    _.remove(this.observersPerEventType(eventType), el => el === obs);

  }
  notifyObservers(eventType:string, data:any){
    // loop through each of the obs in the collection, FOR EACH of this observers, we call the notifify method
    this.observersPerEventType(eventType).forEach(obs => obs.notify(data))
  }

  private observersPerEventType(eventType:string): Observer [] {
    const observersPerType = this.observers[eventType];
    if(!observersPerType){
      this.observers[eventType] = []
    }
    return this.observers[eventType];
  }
}


// create an single instance of the Event Bus.
export const globalEventBus = new EventBus();
