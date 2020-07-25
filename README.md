# hello socket.io

- 방에 접속하기 ( 사용자 이름 중복 체크 ) -메시지 보내기

- 다른 사용자 메시지 받기 -다른 사용자 목록 받기

server/side

- users state 관리

- [ ] addUser
- [ ] getUser
- [ ] removeUser
- [ ] getUsersInRoom

-socket.io 기능

- [ ] on connection

- log entrance

- [ ] socket.on join

- name,room 으로 접속
  -- addUser
  -- socket.join : room
  -- socket.broadcast : message
  -- io.to(room).emit : roomData
