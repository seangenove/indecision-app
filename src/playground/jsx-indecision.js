console.log("app.js is running!");

const app = {
    title : 'Indecision App',
    subtitle : 'Subtitle of Indecision App',
    options : []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderIndecisionApp();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);

    alert(app.options[randomNum]);

    // renderIndecisionApp();
}

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}

            <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>

            <p>{app.options.length}</p>
            <button  disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={onRemoveAll}>Remove all</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
