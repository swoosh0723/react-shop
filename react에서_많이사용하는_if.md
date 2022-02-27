# 리액트에서 자주쓰는 if문 작성패턴

## 1. component 안에서 사용하는 if/else

```javascript
function Component() {
  if (true) {
    return <p>true이면 보여줄는 HTML</p>;
  } else {
    return null;
  }

  // else 생략가능
  if (true) {
    return <p>true이면 보여주는 HTML</p>;
  }
  return null;
}
```

## 2. JSX안에서 사용하는 삼항연산자

```javascript
function Component() {
  return <div>{1 === 1 ? <p>true면 보여줄 HTML</p> : null}</div>;
}
```

## 3. &&연산자로 if 역할 대신하기

```javascript
function Component() {
  return <div>{1 === 1 ? <p>true면 보여줄 HTML</p> : null}</div>;
}
```

```javascript
function Component() {
  return <div>{1 === 1 && <p>true면 보여줄 HTML</p>}</div>;
}
```

## 4. switch / case 조건문

처음 if문을 switch / case 조건문으로 변경가능

```javascript
function reducer(state, action) {
  if (action.type === "addItem") {
    return addState;
  } else if (action.type === "minusItem") {
    return minusState;
  } else {
    return state;
  }
}
```

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      return addState;
    case "minusItem":
      return minusState;
    default:
      return state;
  }
}
```

## 5. 오브젝트 자료형을 응용한 enum

자바스크립트 오브젝트자료형 보여주고 싶은 HTML 담고 사용

```javascript
function Cart(props) {
  const [contents, setContents] = useState({
    info: <p>상품정보</p>,
    shipping: <p>배송관련</p>,
    return: <p>환불</p>,
  });

  const [state, setState] = useState("shipping");

  return (
    <Information
      contents={contents}
      state={state}
      setState={setState}
    ></Information>
  );
}

function Information(props) {
  return (
    <div
      onClick={() => {
        props.setState("return");
      }}
    >
      {props.contents[props.state]}
    </div>
  );
}
```
