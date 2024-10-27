let users = [];

const socketHandler = (io) => {
    const addUser = (userId, socketId) => {
        const existingUser = users.find((user) => user.userId === userId);
        if (existingUser) {
            existingUser.socketId = socketId;
            existingUser.online = true;
        } else {
            if (userId) {
                users.push({ userId, socketId, online: true });
                console.log(users, 'online users');
            }
        }

        io.emit("usersOnline", users);
    };

    const removeUser = (socketId) => {
        users = users.map(user => 
            user.socketId === socketId ? { ...user, online: false } : user
        );
        io.emit("usersOnline", users); // Update other clients
    };

    io.on('connection', (socket) => {
        console.log(users,'A user connected: ', socket.id);
        io.to(socket.id).emit('notification', {
            message: `Welcome, user !`
        });
        socket.on('message', (data) => {
            console.log('Received message: ', data);
            io.emit('message', data);  
        });

        socket.on('join', ({ userId }) => {
            console.log(`User ${userId} has joined`);
            console.log(socket.id,'socket.id')
            io.to(socket.id).emit('notification', {
                message: `Welcome, user ${userId}!`
            });
        });

        socket.on("addUser", (user) => {
            addUser(user.userId, socket.id);  
        });

        socket.on("sentNotification", (message) => {
            const receiver = users.find(user => user.userId === message.receiverId);
            const socketId = receiver?.socketId;
            console.log(socket,'socketsocketsocketsocketsocket')
            if (socketId) {
                io.to(socketId).emit('receiveNotification', message);
            } else {
                console.warn(`Receiver with userId ${message.receiverId} not connected`);
            }
        });
        
        socket.on('disconnect', () => {
            console.log('User disconnected: ', socket.id);
            removeUser(socket.id);  
        });
    });
};

module.exports = socketHandler;
