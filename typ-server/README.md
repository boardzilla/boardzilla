# Typ server

## Routes

All endpoints use JSON encoded bodies

### POST `/users`

Takes:
* name
* password
* email

Creates a user. Returns 201 if successful

### POST `/login`

Takes:
* name
* password

Returns {token: [jwt token]}

### POST `/games`

Create a game

Takes:
* name
* content (base64 encoded zip file)

### GET `/games/:id/*res`

Gets a resource from the game

### POST `/sessions`

Creates a game session.

Takes:
* name

### GET `/sessions/:id`

Gets information on a game session.

## WebSocket Protocol

### Receieved messages

Takes the structure of:

`{type: [type], ...otherKeys}`

#### joinGame

Joins an existing session.

Other Keys:
* sessionId

#### startGame

Start a game session

#### action

Sends an action for the game

Other keys:
* action

## Upload a game

Use script
`scripts/upload.js [name] [dir] [url]`

### Sent messages

