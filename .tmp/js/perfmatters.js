// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwZXJmbWF0dGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZWFzdXJpbmcgdGhlIENyaXRpY2FsIFJlbmRlcmluZyBQYXRoIHdpdGggTmF2aWdhdGlvbiBUaW1pbmdcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvY3JpdGljYWwtcmVuZGVyaW5nLXBhdGgvbWVhc3VyZS1jcnBcblxuZnVuY3Rpb24gbG9nQ1JQKCkge1xuICB2YXIgdCA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcsXG4gICAgZGNsID0gdC5kb21Db250ZW50TG9hZGVkRXZlbnRTdGFydCAtIHQuZG9tTG9hZGluZyxcbiAgICBjb21wbGV0ZSA9IHQuZG9tQ29tcGxldGUgLSB0LmRvbUxvYWRpbmc7XG4gIHZhciBzdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JwLXN0YXRzXCIpO1xuICBzdGF0cy50ZXh0Q29udGVudCA9ICdEQ0w6ICcgKyBkY2wgKyAnbXMsIG9ubG9hZDogJyArIGNvbXBsZXRlICsgJ21zJztcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGxvZ0NSUCgpO1xufSk7XG4iXSwiZmlsZSI6InBlcmZtYXR0ZXJzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
