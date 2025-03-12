// import React from 'react';
// import ReactDOM from 'react-dom';

// function Content() {
//     return (
//         <div>
//             <h1>Content</h1>
//             <p>The content text!!!</p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Content />,
//     document.getElementById('root')
// );

// const h1 = document.createElement('h1');
// h1.textContent = 'Content';
// h1.className = 'content';
// document.getElementById("root2").appendChild(h1);


const navBar = (
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png" alt="React logo" width="200px"/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
);

ReactDOM.render(
    navBar,
    document.getElementById('root')
);

// ReactDOM.render(
//     <div className="text">Some text practise</div>, 
//     document.getElementById('root2')
// );