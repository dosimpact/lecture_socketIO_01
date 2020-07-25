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

# FB

- react-router-dom : Link : onClick 이번트 > to 에 걸리 경로로 가는데, e.prevenDefault로 막을 수 있다.

# FB

- 양방향 통신이라 머리 아프네...
- emit을 할것만 정하자.

- ServerSide:
- message : client로 메시지를 보낸다.
- roomData : 방의 인원 정보를 보낸다.

- ClientSide:
- connection ✔
- disconnect ✔
- join ✔
- sendMessage

# snippet

```
socket.join
socket.emit("",{},()=>{}) call bakc
socket.on("",({},()) =>{}))

io.to().emit
```

- socket.emit 1:1 메시징
- socket.broadcast.emit 나빼고 전부 메시징
- io.to().emit 나 포함 전부 메시징
