function Content() {
    return (
        <div>
            <h1>Content</h1>
            <p>The content text!!!</p>
        </div>
    )
}

ReactDOM.render(
    <Content />,
    document.getElementById('root')
);

// const h1 = document.createElement('h1');
// h1.textContent = 'Content';
// h1.className = 'content';
// document.getElementById("root2").appendChild(h1);

ReactDOM.render(<div className="text">Some text practise</div>, document.getElementById('root2'));