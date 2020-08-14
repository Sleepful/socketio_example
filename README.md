# Socketio Example with Namespaces

This project showcases real-time data sharing. It's a ReactJS front-end with a NodeJs back-end to manage the connections. The app lets separate clients connect with each other and propagates the changes that one client does to the other clients. The connections are divided into different groups, so the connections are shared only if two or more clients connect to the same group.

To run it just clone the repo and run the client and the server at the same time.

For the server:

```
cd socketio-server
npm install
npm run
```

For the client:
```
cd socketio-client
npm install
npm run
```
Now go to http://localhost:3000/ on multiple tabs, and see them share the same color if they are in the same room, move to a different room to share the color with the clients connected to that room.

---

This was inspired by the following article:

[Real Time Web App | React.js + Express + Socket.io](https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3) [(archive.is)](http://archive.is/Y0eMZ)

In the article the author uses react in a way that lends itself to errors so I fixed it and uploaded it here, additionally this example includes `namespaces` feature of socket.io, which allows grouping the client connections to different "rooms".

This comment from the medium article mentions why the implementation from the article above is problematic and very prone to bugs


![commentFromMedium](https://i.imgur.com/sb9a5pd.png)

Side note: the author of that blog post decided to block me from their medium after I posted this repository in the comments  ¯\_(ツ)_/¯
