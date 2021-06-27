import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    console.log(filename);
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  await fs.promises.unlink(filename);
}