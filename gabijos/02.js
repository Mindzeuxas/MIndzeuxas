/**
 * Padarykite funkciją, kuri iš visų esamų filmų sąrašo (kuris gali būti bet kada
papildomas), pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų.
Jei joks filmas netinka, turi tai pranešti.
● Jei vietoj įverčio arba žanro yra pateikiamas žodis ‘nesvarbu’, yra pateikiami filmai pagal
tą kriterijų, kuris yra svarbus.
● Jei abu kriterijai yra nesvarbūs, parekomenduokite top 3 įvertintus filmus.
 * 
 */


const movies = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 9.0 },
    { title: 'The Godfather', genre: 'Crime', rating: 9.2 },
    { title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
    { title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
    { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 },
    { title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
    { title: 'Fight Club', genre: 'Drama', rating: 8.8 },
    { title: 'Forrest Gump', genre: 'Drama', rating: 8.8 }
];

function recommendMovies(genre, minRating) {
    let filteredMovies = movies;

    if (genre.toLowerCase() !== 'nesvarbu') {
        filteredMovies = filteredMovies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (minRating.toLowerCase() !== 'nesvarbu') {
        filteredMovies = filteredMovies.filter(movie => movie.rating >= parseFloat(minRating));
    }

    if (filteredMovies.length > 0) {
        console.log('\nRekomenduojami filmai:');
        filteredMovies.forEach(movie => {
            console.log(`${movie.title} (${movie.genre}) - Įvertinimas: ${movie.rating}`);
        });
    } else {
        console.log('Deja, nėra filmų, atitinkančių jūsų kriterijus. 😢');
        console.log('\n');
    }
    if (genre.toLowerCase() === 'nesvarbu' && minRating.toLowerCase() === 'nesvarbu') {
        console.log('\nKadangi abu kriterijai nesvarbūs, siūlome TOP 3 filmus:');
        const topMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);
        topMovies.forEach(movie => {
            console.log(`${movie.title} (${movie.genre}) - Įvertinimas: ${movie.rating}`);
        });
    }
}


recommendMovies('Drama', '8.8'); 
recommendMovies('Sci-Fi', 'nesvarbu'); 
recommendMovies('nesvarbu', '9'); 
recommendMovies('nesvarbu', 'nesvarbu'); 
