export default async function handler(req, res) {
  const apiKey = process.env.VITE_API_KEY;
  const query = req.query.q || "";

  const url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;
  
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
