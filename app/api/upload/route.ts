import latex from "node-latex";
import { resolve, join } from "path";

export async function POST(req: any, res: any) {
  const options = {
    inputs: [resolve(join(__dirname, "/"))],
    cmd: "xelatex",
    passes: 2,
  };

  res.setHeader("Content-Type", "application/pdf");

  let buf = Buffer.from(req.body?.foo.toString("utf8"), "base64");
  let text = buf.toString();

  const pdf = latex(text, options);

  pdf.pipe(res);
  pdf.on("error", (err: Error) => {
    console.log(err.message);
    res.removeHeader("Content-Type");
    res.status(400).send(JSON.stringify({ error: err.message }));
  });
  pdf.on("finish", () => {});
}
