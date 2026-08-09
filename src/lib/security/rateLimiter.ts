import { NextRequest } from "next/server";

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const ipStore = new Map<string, RateLimitRecord>();

// Clean up stale records periodically (every 15 minutes)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipStore.entries()) {
      if (now > record.resetTime) {
        ipStore.delete(ip);
      }
    }
  }, 15 * 60 * 1000);
}

export function checkRateLimit(
  req: NextRequest,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000 // 10 minutes
): { isRateLimited: boolean; current: number; limit: number; resetTime: number } {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const clientIp = forwardedFor?.split(",")[0]?.trim() || realIp || "127.0.0.1";

  const now = Date.now();
  const record = ipStore.get(clientIp);

  if (!record || now > record.resetTime) {
    const newRecord: RateLimitRecord = {
      count: 1,
      resetTime: now + windowMs,
    };
    ipStore.set(clientIp, newRecord);
    return { isRateLimited: false, current: 1, limit, resetTime: newRecord.resetTime };
  }

  record.count += 1;
  ipStore.set(clientIp, record);

  if (record.count > limit) {
    return { isRateLimited: true, current: record.count, limit, resetTime: record.resetTime };
  }

  return { isRateLimited: false, current: record.count, limit, resetTime: record.resetTime };
}
