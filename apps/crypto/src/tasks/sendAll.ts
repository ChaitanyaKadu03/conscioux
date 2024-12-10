import { redis } from "@repo/redisdb/redis";

export const marketAll = async (): Promise<string> => {
    const token = await redis.get("token");

    return token || "empty";
}