'use strict';
class Module_helloworld {
    constructor(dependencies) {
        this.deps = dependencies;
    }

    header() {
        console.log(`${this.deps.chalk.green('<>< Hello, world! Module ><>')} `);
    }

    static config() {
        return {
            time: 'default'
        };
    }

    up() {
        this.header();
        console.log(this.deps.chalk.green('>') + ' works!');
        console.log(__filename);
    }
}

module.exports = Module_helloworld; 