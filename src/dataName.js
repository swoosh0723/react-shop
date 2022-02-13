const name = 'kim'
const name2 = 'park'

// export는 파일 하나당 한번만 사용가능
export default name
// import name from '경로'

// 내보낼게 많다면!
export { name, name2 }
// import { name, name2 } from '경로'

// 내보내기, 가져오기 import, export
// 변수, 함수 등등 다 할 수 있다
// export는 파일 하나당 한번만 사용가능