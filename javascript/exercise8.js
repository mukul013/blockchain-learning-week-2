
// using then & catch
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

fetch(apiUrl).then( (res) => res.json() ).then( (data) => {
    console.log('Data 1 :');
    console.log(data);
  })
  .catch((err) => {
    console.error('Error:', err);
});

// using async & await
async function fetchData() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log('Data 2 :');
    console.log(data)
  } catch (err) {
    console.error('Error :', err);
  }
}

fetchData();