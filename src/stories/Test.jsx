export default function Test() {
    const isClicked = () => console.log('Clicked!!')
    return <h1 onClick={isClicked}>Hello!!</h1>
}