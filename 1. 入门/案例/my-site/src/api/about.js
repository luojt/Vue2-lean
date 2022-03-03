import request from "./request";

/**
 * 关于我们
 */
export async function getAbout() {
	return await request.get("/api/about");
}
