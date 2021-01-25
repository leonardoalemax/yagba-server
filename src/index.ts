import server from "./server";

server().start(parseInt(process.env.PORT || '8080'), '0.0.0.0')