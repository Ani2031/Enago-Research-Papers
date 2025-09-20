import axios from "axios";

export async function fetchPapers() {
    try {
        const res = await axios.get("https://easydash.enago.com/acceptedpapers", {
        });
        return res.data;
    } catch (error) {
        throw new Error("Failed to fetch papers: " + error.message);
    }
}
