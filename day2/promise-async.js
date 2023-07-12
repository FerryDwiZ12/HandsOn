const songList = Promise.resolve([
  {
    title: "Sikok Bagi Duo",
    artists: [{ name: "JKT48" }],
    duration: 200,
  },
]);

function printSongsPromise(song) {
  song
    .then((songs) => {
      console.log("Songs List:");
      songs.forEach((song) => {
        console.log(`===== Promise ====`);
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

async function printSongsAsync(song) {
  try {
    const songs = await song;
    console.log("Songs List:");
    songs.forEach((song) => {
      console.log(`===== AsynAwait ====`);
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

printSongsPromise(songList);
printSongsAsync(songList);
