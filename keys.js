
    console.log('this is loaded');
    
    exports.spotify = {
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    };
    



  //   spotify
  // .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  // .then(function(data) {
  //   console.log(data); 
  // })
  // .catch(function(err) {
  //   console.error('Error occurred: ' + err); 
  // });