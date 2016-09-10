// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {
  // Send the message back.
  self.postMessage('You said: ' + e.data);
}, false);