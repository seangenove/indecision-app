class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility : false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Show Details" : "Hide Details"}
                </button>
                {this.state.visibility &&
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// console.log("build-it-visible.js is running!");

// const appRoot = document.getElementById('app');
// let visibilityFlag = false;

// const onToggleVisibility = () => {
//     visibilityFlag = !visibilityFlag

//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={onToggleVisibility}>{visibilityFlag ? "Hide" : "Show"} details</button>
//             {visibilityFlag && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();
