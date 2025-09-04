export async function getCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
         if (!response.ok) return {message: 'Misslyckad hämtning av kategorier.'}
        const data = await response.json();
        console.log(data);
         return data.results;
    } catch (error) {
       console.log(error);
       throw new Error("Det gick inte att nå API:et för att hämta kategorier.")
    }
}

