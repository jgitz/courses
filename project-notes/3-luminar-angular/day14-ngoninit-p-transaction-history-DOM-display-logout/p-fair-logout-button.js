/* 
.... inside dashboard html.... design a logout button....

.... give an (click) = "logout_function()"

..... inside DASHBOARD TS... define logout function such that on click .... it removes the loggedin_accno from LS... AND navigate to SIGN IN PAGE


*/



/* +++++ LOGIN ALERT ON BACK BUTTON ..

.... after logout when we press BACK button, it should not go back to dashboard... instead it should alert login and go to SIGN IN page

******.... WE implement the condition for LOGIN ALERT inside the NGONINIT() { } BODY
.... the if condition is .... if loggin_accno_key is NOT present in LS... alert PLEASE LOGIN.... when we press logout, the login_accno_key gets removed from the LS.... so when we press BACK button, it shows ALERT to login because there is no loggedin_accno_key inside LS



*/