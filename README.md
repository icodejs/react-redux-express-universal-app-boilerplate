# Redux Universal App Boilerplate
React client-side and server-side rendering using React, Redux, React-Engine and Express.

## Setup
```
$ npm install
```

Open a new terminal window in the root of the project
```
$ npm run dev
```

Open another new terminal window in the root of the project
```
$ npm run watch

# Visit: http://localhost:5000
```

## Directory structure
```
├── bin
│   └── www
├── gulpfile.js
├── package.json
├── public
│   ├── app.js
│   └── js
│       ├── actions
│       │   └── counter.js
│       ├── components
│       │   ├── Counter.js
│       ├── constants
│       │   └── index.js
│       ├── containers
│       │   └── App.js
│       ├── reducers
│       │   ├── counter.js
│       │   └── index.js
│       ├── store
│       │   └── configureStore.js
│       └── views
│           ├── home.js
│           └── layout.js
└── server.js
```