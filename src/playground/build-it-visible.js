console.log("build-it-visible.js is running!");

const appRoot = document.getElementById('app');
let visibilityFlag = false;

const onToggleVisibility = () => {
    visibilityFlag = !visibilityFlag

    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>

            <button onClick={onToggleVisibility}>{visibilityFlag ? "Hide" : "Show"} details</button>
            {visibilityFlag && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
