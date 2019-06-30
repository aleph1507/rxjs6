1. boilerplate
2. quickstart, MouseEvent
3. create Observable and Observer
4. operators, map, throttleTime
5. Subject, EventEmitter
6. filter
7. debounceTime, distinctUntilChanged
8. scan, reduce
9. pluck
10. mergeMap
11. switchMap
12. BehaviorSubject


boilerplate setup:<br>

    $ npm init -y<br>
    $ npm install rxjs webpack webpack-dev-server typescript ts-loader<br>
    $ npm install webpack-cli --save-dev<br>

add to <i>script</i> in <i>package.json</i>:
    <p>"scripts": {
        "start": "webpack-dev-server --mode development"
      },</p>
      
      $ npm run start
      
setup Webpack<br>
setup <i>webpack.config.js</i> with content:

    const path = require('path');
    module.exports = {
        entry: './src/index.ts',
        devtool: 'inline-source-map',
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: [ '.tsx', '.ts', '.js' ]
        },
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist')
        }
    };
    
Setup <i>tsconfig.json</i>:

    {
        "compilerOptions": {
            "outDir": "./dist/",
            "sourceMap": true,
            "noImplicitAny": false,
            "module": "es6",
            "moduleResolution": "node",
            "target": "es6",
            "allowJs": true,
            "lib": [
                "es2017",
                "dom"
            ]
        }
    }
    
Setup <i>index.html</i>:

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>RxJS Demo</title>
            <style>
                body { font-family: 'Arial'; background: lightgray }
                ul { list-style-type: none; padding: 20px; }
                li { padding: 15px; background: lightcoral; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <h1>RxJS Demo</h1>
            <div>
                <ul id="list"></ul>
            </div>
            <script src="/bundle.js"></script>
        </body>
        </html>
        
Create <i>/src</i> folder containing <i>index.ts</i>:

    import { Observable } from 'rxjs';
    var observable = Observable.create((observer:any) => {
        observer.next('Hello World!');
        observer.next('Hello Again!');
        observer.complete();
        observer.next('Bye');
    })
    observable.subscribe(
        (x:any) => logItem(x),
        (error: any) => logItem ('Error: ' + error),
        () => logItem('Completed')
    );
    function logItem(val:any) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
    
<br><br>Run the start script:

    $ npm run start   
    
App should be accessible via URL http://localhost:8080    
