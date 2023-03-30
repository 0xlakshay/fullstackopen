```
sequenceDiagram
    participant Browser
    participant Server

    Note right of Browser: User enters the note and clicks the Submit button

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Note left of Server: Server recieves data in request Body
    note left of Server: Server adds the note, responds with 302 /notes
    Server-->>Browser: URL redirect (status code: 302) /notes
    deactivate Server

    Note over Browser, Server: Browser requests /notes endpoint & <br/>all resources are requested again the same way as before

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: the css file
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Server
    Server-->>Browser: the JavaScript file
    deactivate Server

    Note right of Browser: The Browser starts executing the JavaScript code that fetches the JSON from the Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: [{ "content": "New Note Content", "date": "2023-3-29" }, ... ]
    deactivate Server

    Note right of Browser: The Browser executes the callback function that renders the notes
    Note over Browser, Server: New note will appear
```
