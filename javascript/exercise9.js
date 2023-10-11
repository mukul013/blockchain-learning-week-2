const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;

// using then & catch
fetch(apiUrl).then( (res) => res.json() ).then( (data) => {
    const userPosts = data.filter( (post) => post.userId == userId)
    console.log('Data by User 1 :');
    console.log(userPosts);
  })
  .catch((err) => {
    console.error('Error:', err);
});

// using async & await
async function fetchData() {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const userPosts = data.filter( (post) => post.userId == userId)
        console.log('Data by User 1 :');
        console.log(userPosts);
    } catch (err) {
        console.error('Error :', err);
    }
  }
  
  fetchData();