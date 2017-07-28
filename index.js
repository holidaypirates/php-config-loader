const runner = require('child_process');

module.exports = function(source) {

  const callback = this.async();

  runner.exec(
    `php -r '$output = include("${this.resourcePath}"); print json_encode($output);'`,
    (err, stdout, stderr) => {
      if(err){
        return callback(err);
      };
      callback(null, `module.exports = ${stdout}`);
    }
  );
};
