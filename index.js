const notifier      = require('node-notifier');
const timer         = require('./lib/timer.js');
const chalk         = require('chalk'),
      dependencies  = {
          chalk:        chalk,
          notifier:     notifier,
          notify:       notifier.notify,
          timeMonitor:  timer
      };
const BaseModuleLoader              = require('./lib/moduleloader.js');
const ModuleLoader                  = new BaseModuleLoader(dependencies);
const WAIT_TIMEOUT_TILL_EXECUTION   = 5000;
const WAIT_TIMEOUT_EVERY_MINUTE     = 60000;
const WAIT_TIMEOUT_EVERY_HALFHOUR   = 1800000;
const WAIT_TIMEOUT_EVERY_HOUR       = 3600000;
const WAIT_TIMEOUT_EVERY_HALFDAY    = 43200000;
const WAIT_TIMEOUT_EVERY_DAY        = 86400000;

function up() {
    console.log(chalk.bgBlue            ('                           '));
    console.log(chalk.white.bold.bgBlue ('         Curiosity         '));
    console.log(chalk.bgBlue            ('                           '));
    console.log(chalk.bgRed.bold.white('        Version 1.0        '));
    console.log(
    `
${chalk.green('>')} Starting Curiosity...`
    );
    console.log(`${chalk.green('>')} Loaded in modules...`);
    ModuleLoader.loadModules();
    console.log(`${chalk.green('>')} Setting execution loop to ${WAIT_TIMEOUT_TILL_EXECUTION}ms.`);
    setInterval(() => {
        console.log(`${chalk.green('>')} Running 5s...`);
        ModuleLoader.runSeconds();
    }, WAIT_TIMEOUT_TILL_EXECUTION);
    setInterval(() => {
        console.log(`${chalk.green('>')} Running 1m...`);
        ModuleLoader.runMinute();
    }, WAIT_TIMEOUT_EVERY_MINUTE);
    setInterval(() => {
        console.log(`${chalk.green('>')} Running 30m...`);
        ModuleLoader.runHalfhour();
    }, WAIT_TIMEOUT_EVERY_HALFHOUR);
    setInterval(() => {
        console.log(`${chalk.green('>')} Running 1h...`);
        ModuleLoader.runHour();
    }, WAIT_TIMEOUT_EVERY_HOUR);
    setInterval(() => {
        console.log(`${chalk.green('>')} Running 12h...`);
        ModuleLoader.runHalfday();
    }, WAIT_TIMEOUT_EVERY_HOUR);
    setInterval(() => {
        console.log(`${chalk.green('>')} Running daily...`);
        ModuleLoader.runDaily();
        console.log(`${chalk.green('>')} Run completed... Staring new-day run`);
    }, WAIT_TIMEOUT_EVERY_HOUR);
}

up(); 
