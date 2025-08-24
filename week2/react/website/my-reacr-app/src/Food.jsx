function Food() {
    const food = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    return (
        <div>
            <h1>Food</h1>
            <ul>
                {food.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Food;