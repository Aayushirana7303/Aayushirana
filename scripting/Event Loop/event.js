


/* Event Loop -->>
 1. sync Code -- which is executive line by line means executed one by one continiousaly.
 2. Async Code -- Which is not executed continiously blocking some lines.

 Async Code Example -- 
 console.log("Say Hello");
 setTimeOut(saymyname, 5000)  --->>  waiting for 5 sec
 console.log("End");  --->>   It is in blocking state 5 sec
 
 Event loops -->>
 call stack
 browser
 callback queue


 */