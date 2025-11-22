export default async function handler(req, res) {
  const apiKey = process.env.VITE_API_KEY;

  const country = req.query.country || "us";
  const category = req.query.category || "general";

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
