exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  framework: 'jasmine2',
  jasmineNodeOpts: {
  // If true, print colors to the terminal.
  showColors: false,
  // Default time to wait in ms before a test fails.
 // defaultTimeoutInterval: 30000,
  // Function called to print jasmine results.
 // print: function() {},
  // If set, only execute specs whose names match the pattern, which is
  // internally compiled to a RegExp.
 // grep: 'pattern',
  // Inverts 'grep' matches
 // invertGrep: false
}
};