export function GET(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("This is a FormData GET response");
}

export function POST(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Received FormData: " + JSON.stringify(req.body));
}

export function OPTIONS(req, res) {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end();
}
