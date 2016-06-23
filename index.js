#!/usr/bin/env node
var commander = require('commander');
var program = require('./lib/program.js');
var transl = require('./lib/transl.js');

commander
  .arguments('<language> <keyword>')
  .usage(program.help())
  .action(function(language) {
    var argumentsFormatted = program.formatCliArguments(language, arguments);

    transl.translate(
      argumentsFormatted.sourceLanguage,
      argumentsFormatted.translateLanguage,
      argumentsFormatted.keyword,
      true,
      function(result) {
        console.log(result);
      }
    );
  })
  .parse(process.argv);
