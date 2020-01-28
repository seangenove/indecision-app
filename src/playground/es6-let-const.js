'use strict';

console.log("app.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle of Indecision App',
    options: ['One', 'Two']
};

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            app.options[1]
        )
    )
);

var user = {
    name: 'Sean',
    age: 18,
    location: 'Baguio'
};

function getLocation(location) {
    if (location) {
        return location;
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location) ? React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    ) : undefined
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
