// socketHandler.js



let users  = [];



const socketHandler = (io) => {
    const addUser = (userId,  socketId ) => {
        const existingUser = users.find((user) => user.userId === userId);
        if (existingUser) {
          existingUser.socketId = socketId;
          existingUser.online = true;
        } else {
          userId ? users.push({ userId, socketId, online: true }) : "";
          console.clear()
          console.log(users,'online users')
        }
    
        io.emit("usersOnline", users);
      };


    io.on('connection', (socket) => {
      
      console.log('A user connected: ',   socket.id);
      socket.on('message', (data) => {
        console.log('Received message: ', data);
        // Broadcast message to all clients
        io.emit('message', data);
      }); 
      socket.on('join', ({ userId }) => {
        console.clear()
        console.log(`User ${userId} has joined`);
        socket.emit('notification', {
          message: `Welcome, user ${userId}!`
        });
      });
      
        socket.on("addUser", (user) => {
        addUser(user.userid, socket.id);
        });

        socket.on("userUpdated", (user) => {
          console.log(user,users,'user,users')
          });
  
       
      socket.on('disconnect', () => {
        console.log('User disconnected: ', socket.id);
      });
    });
  };
  
  // Export the socket handler function
  module.exports = socketHandler;
  