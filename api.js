const involvement = async () => {
  const baseUrl = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDbypMvqt2lrPyv0cdl3/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: 'item1',
        username: 'Jane',
        comment: 'Hello',
      }),
    });

  const app = await baseUrl.text();
  console.log(app);
};

involvement();