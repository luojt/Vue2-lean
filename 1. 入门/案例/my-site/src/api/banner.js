import request from "./request";

/**
 * 获取banner
 */
export async function getBanners() {
	return await request.get("/api/banner");
}
