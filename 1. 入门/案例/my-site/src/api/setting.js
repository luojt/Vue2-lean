import request from "./request";

/**
 * 获取设置
 */
export async function getSetting() {
  return await request.get("/api/setting");
}
