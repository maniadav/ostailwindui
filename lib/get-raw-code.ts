import fs from "fs";
import path from "path";

export function loadComponentCode(file: string) {
  const fullPath = path.join(process.cwd(), "components/application-ui", file);
  return fs.readFileSync(fullPath, "utf8");
}
