import app from "../server";

export default function handler(req: any, res: any) {
    if (req.url === "/api" || req.url === "/api/") {
        const matched = req.headers["x-matched-path"] || req.headers["x-invoke-path"];
        if (matched && typeof matched === "string") {
            req.url = matched;
        }
    }
    if (req.url && !req.url.startsWith("/api") && req.url !== "/health") {
        req.url = "/api" + (req.url.startsWith("/") ? req.url : "/" + req.url);
    }
    return app(req, res);
}

