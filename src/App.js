function App() {
    const handleClick = () => {
        console.log('Button was clicked');
    } 


    return <div>
        <button onClick={handleClick}>Add animal</button>
    </div>
}

export default App;