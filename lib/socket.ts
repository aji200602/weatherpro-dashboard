import { io, Socket } from 'socket.io-client'

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001'

let socket: Socket | null = null

export const initializeSocket = (): Socket => {
  if (socket?.connected) {
    return socket
  }

  socket = io(SOCKET_URL, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 5,
  })

  return socket
}

export const getSocket = (): Socket => {
  if (!socket) {
    return initializeSocket()
  }
  return socket
}
