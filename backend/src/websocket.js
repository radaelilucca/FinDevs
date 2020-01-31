import socketio from 'socket.io';
import parseStringAsArray from './utils/parseStingAsArray';
import calculateDistance from './utils/calculateDistance';

let io;
const connections = [];

export function setupWebSocket(server) {
  io = socketio(server);

  io.on('connection', socket => {
    console.log(socket.id);
    const { latitude, longitude, techs } = socket.handshake.query;

    console.log(socket.handshake.query);

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });
  });
}

export function findConnections(coordinates, techs) {
  return connections.filter(connection => {
    return (
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
    );
  });
}

export function sendMessage(to, message, data) {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
}
