import AdmZip from "adm-zip";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const zip = new AdmZip();
  const rootDir = process.cwd();

  // Create public directory if it doesn't exist
  const publicDir = path.join(rootDir, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const filesToInclude = [
    "index.html",
    "package.json",
    "tsconfig.json",
    "vite.config.ts",
    "metadata.json",
    ".env.example",
    ".gitignore"
  ];

  const dirsToInclude = [
    "src"
  ];

  for (const file of filesToInclude) {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
      zip.addLocalFile(filePath);
    }
  }

  for (const dir of dirsToInclude) {
    const dirPath = path.join(rootDir, dir);
    if (fs.existsSync(dirPath)) {
      zip.addLocalFolder(dirPath, dir);
    }
  }

  const zipPath = path.join(publicDir, "portfolio-source.zip");
  zip.writeZip(zipPath);
  console.log(`Zip saved successfully to ${zipPath}`);
}

main().catch(console.error);
