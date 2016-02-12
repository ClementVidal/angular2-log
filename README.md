# angular2-log

This package provide an easy to use log system for angular2 applications.

## Installation

npm install angular2-log

## Usage

Add to your injector the provider for the log service:
```javascript
import {LogService} from 'angular2-log/log';

// To add the provider at your root injector
bootstrap(DemoComponent, [LogService]);
```

Inject the service where needed:

```javascript
export class YourComponent {

    constructor(public logService: LogService) {

    }
}
```

Use it ! :)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* 0.0.0: Still working on it :)

## Contact

* Web: [http://clement-vidal.fr](http://clement-vidal.fr)
* Twitter: [clementvidal_](https://twitter.com/clementvidal_)
* Mail: clementvidalperso(at)gmail(dot)com

## License

TODO: Write license
