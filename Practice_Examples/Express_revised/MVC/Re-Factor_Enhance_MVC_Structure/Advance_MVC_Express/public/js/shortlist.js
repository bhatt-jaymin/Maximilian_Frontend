function shortlist(userId) {
    fetch('/admin/shortlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: userId })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle success, if needed
      console.log(data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }
  