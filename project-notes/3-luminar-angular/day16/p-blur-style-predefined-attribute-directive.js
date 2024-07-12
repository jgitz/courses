// inside the dashboard HTML, when DELETE ACCOUNT is clicked and the CONFIRMATION BOX appears, the BACKGROUND must blur



/* 
.... inside dashboard html... make all codes which you want to blur inside a DIV.....

..... inside DASHBOARD CSS define .blur_stlye { opacity: 0.2}.....

..... inside HTML... goto NEW DIV.... write ATTRIBUTE DIRECTIVE ..... [ngClass] = " dashboard_click_flag == 'clicked ? 'blur_style' : '' '"

**** now if the click flag value is "clicked", then blur happens because in code logic when we click the delete account button, the click flag sets its value = "clicked"





*/