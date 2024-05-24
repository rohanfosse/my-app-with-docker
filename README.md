# React Todo App

## Description
This is a simple React application to manage a todo list. It demonstrates the basic concepts of React, including components, state, and props.

## Project Structure
The project has the following structure:

```
my-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── TodoItem.js
│   ├── App.js
│   ├── index.js
│   ├── config.js
│   └── styles.css
├── Dockerfile
├── package.json
└── README.md
```

## How to Run
### Without Docker
1. **Install dependencies**: `npm install`
2. **Start the development server**: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### With Docker
1. **Build the Docker image**: `docker build -t my-app .`
2. **Run the Docker container**: `docker run -p 5000:5000 my-app`
3. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Components
- **Header**: Displays the title of the app.
- **Footer**: Displays the footer information.
- **TodoItem**: Represents a single todo item. Allows toggling of the completed state.

## State Management
The state is managed in the `App.js` file using the `useState` hook. The `todos` state keeps track of the list of todo items and their completion status.

## MongoDB Configuration
A basic MongoDB configuration is included in the `src/config.js` file. The application expects a MongoDB URI in the `MONGO_URI` environment variable. If not provided, it defaults to `mongodb://localhost:27017/myapp`.

## Styles
Basic styles are defined in the `src/styles.css` file.
