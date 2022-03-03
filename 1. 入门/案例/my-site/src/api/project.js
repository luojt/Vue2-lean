import request from "./request";

/**
 * 项目与效果接口
 */
export async function getProjects() {
	return await request.get("/api/project");
}
