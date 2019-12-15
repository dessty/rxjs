import * as _ from "lodash";

export interface Observer {
  notify(data:any);
}

// we don't want to leak this one to the rest of the application at this point
interface Subject {
  registerObserver(obs:Observer);
  unregisterObserver(obs:Observer);
  notifyObservers(data:any); //data that will be broadcasted to all observers
}


class EventBus implements Subject{
  private observers: Observer[] = []

  registerObserver(obs:Observer){
    this.observers.push(obs);
  }
  unregisterObserver(obs:Observer){
    // using lodash utility library: useful to manipulate data and arrays
    // only remove the element from the observers array if is founds in the list of observers
    _.remove(this.observers, el => el === obs);

  }
  notifyObservers(data:any){
    // loop through each of the obs in the collection, FOR EACH of this observers, we call the notifify method
    this.observers.forEach(obs => obs.notify(data))
  }
}


// create an single instance of the Event Bus.
export const globalEventBus = new EventBus();
