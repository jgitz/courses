/* &&&&& ANGULAR ROUTING
....   when we make many pages in our bank project, we need to set steps to enable routing to these pages by configuring SRC/APP-ROUTING.MODULE.CS....

..... app.components.js has now login component tag.... and it displays log in page as default page....

.....we need another page in our app say a dashboard page....such that in url box of browser, when we type http://localhost:58199/dashboard....we need to get dashboard page.... here DASHBOARD in url box is called PATH

step 1: to create a new dashboard page.... create a new component via.... ng g c dashboard..

step 2: configure routing ts file i.e SRC/APP/APP-ROUTING.MODULE.TS... inside ROUTE[] add OBJECT for both LOGIN AND DASHBOARD COMPONENTS as follows....
....Routes = [

****object for dashboard component    
{ path:"dashboard(****url-path-name)", component: DashboardCompanent(***** component name from ts file of dashboard component)}

****object for login component
{ path:""(****empty string because login page is the home page), component: LogInComponent(****component name from ts file of login component)}
]
note**** press ctrl+. to turn component green

step 3: now to enable routing in the page we've to edit SRC/APP.COMPONENT.HTML file.... got SRC/APP.COMPONENT.HTML file.... remove all the existing tags.... enter tag <router-outlet><router-outlet>

step 4: in browser url box, type: localhost4200/dashboard to view the dashboard page
 





*/