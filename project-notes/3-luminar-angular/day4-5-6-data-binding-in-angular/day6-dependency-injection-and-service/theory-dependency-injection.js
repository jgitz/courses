/* &&&&&&&& DEPENDENCY INJECTION

.... in vanilla javascript if we want to navigate to another page when a button is click, we use button attribute onclick = location.href = "<page path>"

... but in angular we use method.... router.navigateByUrl('<path name (****defined in app-routing.ts)>')

.....but to invoke this method inside a component.... first we've to load the router class dependency inside the component...
.... to do that.... we've to add router class inside the constructor() {} of the component class.... because, constructor() {} is the first method that gets executed when a component is run....

....syntax to add router class inside constructor is....constructor(private(****makes sure this action only works in this component.ts file) <object_nname>: Router (**class name)) {}
.... now we can use this.<object_name>.navigateByUrl("<path>") inside corresponding ts file function to link it to html button


....eg make a button and make function to navigate it to dashboard page when it is clicked





*/