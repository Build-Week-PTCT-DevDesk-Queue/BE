# DevDesk
# Introduction
This application allows student users to create help tickets, and helper users can resolve them.

# Overview
Students and helpers can get the list of all open tickets. 
Students can add new help tickets, edit, and delete them.
A helper can add a ticket to their queue, mark the ticket as resolved, or send the ticket back to the open ticket queue. 

# Authentication
A token is sent to the client using JSON web tokens. The front-end can save the token locally to persist login information. 

## Authentication Endpoints
### POST '/api/auth/register'
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

### POST 'api/auth/login'
Allows an existing user to log in. 
Request body must include a valid username and password.

 ```
 {
     "username": "admin",
     "password": "abc123"
 }

 ```

# Tickets
Ticket objects will look like the following:

```
{
    "id": 1,
    "created_at": "2020-09-18 03:13:25",
    "updated_at": "2020-09-18 03:13:25",
    "user_id": 1,
    "helper_id": null,
    "title": "I need some help with this",
    "description": "This is just so hard my brain may explode, like, KABOOM!",
    "tried": "Literally everything",
    "category": "Category",
    "status": 0
  }
```

## Ticket Endpoints

### GET '/api/tickets
GETs all tickets

### GET '/api/tickets/:ticket_id'
GETs a ticket with the associated ticket_id param

### GET '/api/tickets/user_id/:user_id
GETs all tickets with the associated user_id param

### GET '/api/tickets/helper_id/:helper_id
GETs all tickets with the associated helper_id param

### POST '/api/tickets/create'
CREATEs a ticket  
The request body must have the following:

```
{
	"user_id": "1",
	"title": "I need some help with this",
	"description": "This is just so hard my brain may explode, like, KABOOM!",
	"tried": "Literally everything",
	"category": "Emergency"
}
```

### PUT '/api/tickets/:ticket_id/helper/:helper_id'
UPDATEs a ticket's associated helper_id  
If you pass 0 as the helper_id, the helper_id will return to null

### PUT '/api/tickets/:ticket_id/status'
UPDATEs the status of a ticket with the associated ticket_id param  
The request body must have the following:

```
{
    "status": 1
}
```

# Error Codes
401 - Invalid credentials  
404 - Resource not found  
500 - Server error - see console for details
