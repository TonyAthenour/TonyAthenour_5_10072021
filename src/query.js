
export default async function retrieveContent() {
    const url = "http://localhost:3000/api/cameras";
  
    const response = await fetch(url);
    return response.json();
  }
  