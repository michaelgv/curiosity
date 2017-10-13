'use strict';

const fs = require('fs'); 

class ModuleLoader {
    constructor(dependecies) {
        this.dependecies    = dependecies;
        this.modulesFound   = [];
        this.modulesLoaded  = [];
    }
    loadModules() {
        var directory = 'modules/';
        var basedir = __dirname;
        basedir = basedir.toString().replace('lib', '');
        var dir = basedir + directory;
        fs.readdir(directory, (err, files) => {
            if(err) {
                throw err;
            }
            files.forEach(file => {
                if(file.indexOf('.js') > -1) {
                    this.modulesFound.push(dir+file);
                }
            });
            this.loadFoundModules();
        });
    }
    loadFoundModules() {
        var modulesFound = this.modulesFound;
        for(var i = 0; i < this.modulesFound.length; i++) {
            var tmp = require(this.modulesFound[i]);
            var constructed = new tmp(this.dependecies);
            if(typeof tmp.config !== 'undefined') {
                this.modulesLoaded.push({
                    path: modulesFound[i],
                    constructed: constructed,
                    time: tmp.config().time || 'default'
                });
            }
            else {
                console.log(`${this.dependecies.chalk.red('Error >')} Failed to load in module with path ${this.modulesFound[i]} as it has no valid config method. The config method must be static.`);
            }
        }
    }
    runSeconds() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                if(this.modulesLoaded[i].time == 'default') {
                    tmp.up(); 
                }
            }
        }
    }
    runAll() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                tmp.up(); 
            }
        }
    }
    runMinute() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                if(this.modulesLoaded[i].time == 'minute') {
                    tmp.up(); 
                }
            }
        }
    }
    runHalfhour() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                if(this.modulesLoaded[i].time == 'half hour' || this.modulesLoaded[i].time == 'halfhour' || this.modulesLoaded[i].time == '30m') {
                    tmp.up(); 
                }
            }
        }
    }
    runHour() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                if(this.modulesLoaded[i].time == 'hour' || this.modulesLoaded[i].time == 'hourly' || this.modulesLoaded[i].time == '1h') {
                    tmp.up(); 
                }
            }
        }
    }
    runHalfday() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                if(this.modulesLoaded[i].time == 'halfday' || this.modulesLoaded[i].time == '12h' || this.modulesLoaded[i].time == 'half day') {
                    tmp.up(); 
                }
            }
        }
    }
    runDaily() {
        for(var i = 0; i < this.modulesLoaded.length; i++) {
            var tmp = this.modulesLoaded[i].constructed;
            if(typeof tmp.up !== 'undefined') {
                if(this.modulesLoaded[i].time == 'daily' || this.modulesLoaded[i].time == 'day' || this.modulesLoaded[i].time == '24h') {
                    tmp.up(); 
                }
            }
        }
    }
}

module.exports = ModuleLoader;