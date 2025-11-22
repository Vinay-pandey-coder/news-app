export default async function handler(req, res) {
  const { country, category } = req.query;

  const apiKey = process.env.VITE_API_KEY;  // Vercel env variable

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching news" });
  }
}
