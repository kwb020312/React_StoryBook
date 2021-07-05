export default function Test({color}) {
    const isClicked = () => console.log('Clicked!!')
    return <h1 onClick={isClicked} style={{color}}>Hello!!</h1>
}