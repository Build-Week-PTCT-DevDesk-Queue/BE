# DevDesk
# Introduction
This application allows student users to create help tickets, and helper users can resolve them.

# Overview
Students and helpers can get the list of all open tickets. 
Students can add new help tickets, edit, and delete them.
A helper can add a ticket to their queue, mark the ticket as resolved, or send the ticket back to the open ticket queue. 

# Authentication
A token is sent to the client using JSON web tokens. The front-end can save the token locally to persist login information. 

##Authentication Endpoints
###POST '/api/auth/register'
Creates a new user. 
Request body must include a username, password and role. 
Username must be unique, role must be either 'student', 'helper', or 'both'.  

 ```
 {
     "username": "admin",
     "password": "abc123",
     "role": "helper"
 }

 ```

###POST 'api/auth/login'
Allows an existing user to log in. 
Request body must include a valid username and password.

 ```
 {
     "username": "admin",
     "password": "abc123"
 }

 ```


# Error Codes
401 - Invalid credentials
404 - Resource not found
500 - Server error - see console for details
