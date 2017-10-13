# curiosity
Curiosity is an automated task scheduler like cron, but in NodeJS. It works very simply, clone this repo and run 

```sh
yarn install
# or, if you use NPM (sigh)
npm install 
```

Then, open the modules folder, and create a new module. They are ES6 classes, here is a sample module that will run every 5 seconds:

```javascript
'use strict';

class Module_testmod {
    constructor(dependencies) {
        this.deps = dependencies;
    }
    
    static config() {
        return {
            time: 'default'
        };
    }

    soundAlert() {
        if(this.deps.timeMonitor.hourEquals('11') && this.deps.timeMonitor.minutesEqual('15')) {
            this.deps.notifier.notify({
                'title': 'It\'s 11:15!',
                'message': 'Just a friendly reminder'
            });
        }
    }

    up() {
        this.soundAlert();
    }
}

module.exports = Module_testmod; 
```

This modules accepts dependencies such as desktop notifier (notifier), time monitor (timeMonitor), and chalk (for console output). All module classes must:

1. Accept dependencies passed to it in constructor 
2. Have a static config method which will return an object of time (default=5s,minute=1minute,halfhour=30minutes,hour=1hour,halfday=12hours,daily=daily(24h)), any other custom times you must either (a) create another checker loop, or (b) use timeMonitor to check
3. Have an up method, this method will be called every time the loop has run (ie, every minute if "minute" is set as time), if you do not have any of these methods, the script will not include it.

## Note
All modules are auto-loaded upon run, so as long as they're in the modules directory, they'll be loaded in the system.
