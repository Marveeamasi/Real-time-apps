// Client-side HTTP Polling
setInterval(function() {
  fetch('/get-latest-notifications')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}, 5000); // Poll every 5 seconds
