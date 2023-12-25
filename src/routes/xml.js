export function GET(req, res) {
  const xmlResponse =
    "<root><message>This is an XML GET response</message></root>";
  res.writeHead(200, { "Content-Type": "application/xml" });
  res.end(xmlResponse);
}

export function POST(req, res) {
  res.writeHead(200, { "Content-Type": "application/xml" });
  res.end(req.body);
}

export function OPTIONS(req, res) {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end();
}
