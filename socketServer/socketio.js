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
        console.log('A user connected: ', socket.id);

        socket.on('message', (data) => {
            console.log('Received message: ', data);
            io.emit('message', data); // Broadcast message to all clients
        });

        socket.on('join', ({ userId }) => {
            console.log(`User ${userId} has joined`);
            socket.emit('notification', {
                message: `Welcome, user ${userId}!`
            });
        });

        socket.on("addUser", (user) => {
            addUser(user.userId, socket.id); // Corrected casing to `userId`
        });

        socket.on("userUpdated", (user) => {
            console.log(user, users, 'user, users---------------------------------***********');
            
        });

        socket.on('disconnect', () => {
            console.log('User disconnected: ', socket.id);
            removeUser(socket.id); // Mark user as offline
        });
    });
};

module.exports = socketHandler;
