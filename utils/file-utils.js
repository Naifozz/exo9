import { promises as fs } from "fs";

export async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}

export async function writeJsonFile(filePath, data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, jsonData, "utf-8");
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}
