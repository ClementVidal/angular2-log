# angular2-log

This package provide an easy to use log system for angular2 applications.

Every log are outputted to a named logger.
Each logger has an Observable that can be subscribed in order to achieve various interesting stuffs !

I hope this will help !

## Usage

Install it:
```
npm install --save angular2-log
```

Update System.js config.
This is needed to map import of angular2-log to the right folder.  
*( I do not really get why it's needed, so if anybody have a clue or an answer, please
let me know !)*
```
System.config({
    map: {
        'angular2-log': 'node_modules/angular2-log'
    },
    packages: {
        'angular2-log': {
            defaultExtension: 'js'
        },
        'public/js': {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
```


Add to your injector the provider for the log service:
```javascript
import {LogService} from 'angular2-log/log';

// To add the provider at your root injector
bootstrap(DemoComponent, [LogService]);
```

Inject the service where needed, and use it !

```javascript
export class YourComponent {
    constructor(public logService: LogService) {
		this.logService.debug('Your debug stuff');
		this.logService.info('An info');
		this.logService.warning('Take care ');
		this.logService.error('Too late !');
    }
}
```
## Available Gulp tasks

* **build**: Compile both sources and demo
* **build_src**: Build only source
* **build_demo**: Build only demo
* **watch_src**: Watch all source file and trigger build on change
* **build_demo**: Watch all demo file and trigger build on change
* **serve_demo**: Start a small server on port 8888 to test the demo app.
* **demo**: Build everything, watch everything and start the server !

## Using the demo

By default the demo app does NOT have any dependencies over angular2-log, you have to setup this dependencies by yourself.  
You can choose between two differents approach:
* Using npm install:

```
cd angular2-log/demo
npm install angular2-log
```

* Using npm link:

```
cd angular2-log
[sudo] npm link
cd angular2-log/demo
[sudo] npm link angular2-log
```

Once this is done:
```
gulp demo
```

This will build everything and start the demo.
Which will be available at: http://localhost:8888

## Contact

* Web: [http://clement-vidal.fr](http://clement-vidal.fr)
* Twitter: [clementvidal_](https://twitter.com/clementvidal_)
* Mail: clementvidalperso(at)gmail(dot)com

## License

* [MIT](https://opensource.org/licenses/MIT)
