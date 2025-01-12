export async function getData(fetchData) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/${fetchData}`
    );
    const data = await response.json();
    if (data && data.length) return data;
}
 
