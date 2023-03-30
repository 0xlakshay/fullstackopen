```
sequenceDiagram
    participant Browser
    participant Server

    Note right of Browser: User enters the note and clicks the Submit button
    Note right of Browser: Event handler creates a new note<br/> Adds it to the notes list<br/> Rerenders the note list on page

    Note over Browser, Server: New note will appear

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    Note left of Server: Server recieves data in request Body
    Note left of Server: No redirect response is sent this time
    Server-->>Browser: status 201, {"message":"note created"}
    deactivate Server
```
