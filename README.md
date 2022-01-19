# Flexiana Interview Task

[https://docs.google.com/document/d/1q78CyntLJt4qniVvuY4c8nYtR09B2RLT_nDNBsI-Of4/edit](https://docs.google.com/document/d/1q78CyntLJt4qniVvuY4c8nYtR09B2RLT_nDNBsI-Of4/edit) 

This repository contains two parts, back-end, and front-end

**Back-end**

The back-end is the API that receives two strings and checks if a portion of string1 characters can be rearranged to match string2. To run the back-end run the following commands.

```bash
cd backend 
lein run
```

Scrambles API is available at this endpoint [http://localhost:3000/scramble](http://localhost:3000/scramble). You can test the API by this command.

```bash
curl http://localhost:3000/scramble/katas/steak
```

**Front-end**

To run the front-end run the following commands in the terminal after running the back-end 

```bash
cd frontend
yarn 
npx shadow-cljs watch app
```