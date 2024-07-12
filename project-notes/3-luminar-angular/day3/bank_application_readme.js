// in bank application project we enable the routing by selecting Y option after we type ng new bank_application

// routing is important for projects with multiple web pages... if Y/N question is not asked.... type ng new bank_application --routing .... this enables routing

// to confirm if routing is enabled.... check for file inside bank_application/src/app/app-routing.module.ts

// to create a log in page... create new component via cli command... ng g c log_in

// from soniakalliath's gitpage download codes for login page

// from sonia's login index.html copy bootstrap links (line 7 to 20) and paste in head of bank_app/src/index.html

// to get design of log in page copy html body (no need of script) from login index.html and paste it in bank_app/src/app/login/login.component.html.... then copy selector from login.components.ts and paste it in app.component.ts.... refresh to get login page html view....

// now copy the downloaded css of bank log in page..... paste it inside src/style.css....copy the photo used in downloaded login page and paste it in src/assets.... there are many style.css and assets folder inside the project folder..... change the image link path inside css in src/style.css.... but when we use these files under src then all pages gets the same style....if you want to style only login page use style.css and assets file and folder under login component folder
