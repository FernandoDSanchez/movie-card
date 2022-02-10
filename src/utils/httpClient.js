const API = "https://api.themoviedb.org/3"

export async function get(path) {
    const result = await fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDE3MzQxNTYyOWI5ODkzNzIzMzc4NWJiYWEwNWQyNCIsInN1YiI6IjYxZTk5NzJkYTkxMTdmMDA5MTAxMjA2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_wJxP-ROMm0HbrP_3Xi8N51s09oz3i1sh8HAdJK_lQ",
            "Content-Type": "application/json;charset=utf-8"
        },
    });
    return await result.json();
}