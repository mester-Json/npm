const chalk = require('chalk');

const colleagues = [
  { name: 'Colleague 1', color: 'red' },
  { name: 'Colleague 2', color: 'green' },
  { name: 'Colleague 3', color: 'blue' },
  { name: 'Colleague 4', color: 'yellow' },
];

colleagues.forEach((colleague) => {
  console.log(chalk.keyword(colleague.color)(colleague.name));
});
