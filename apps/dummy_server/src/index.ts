import { schedule } from "node-cron";
import { realtimeData as crypto_rtd } from "./crypto/realTimeData.js"
import { dummyData as crypto_dd } from "./crypto/dummyData.js"
// import { realtimeData as social_rtd } from "./socialMedia/realTimeData.js"

await crypto_rtd();

schedule('*/15 * * * *', async () => {
    await crypto_rtd();
})

schedule('*/5 * * * * *', async () => {
    await crypto_dd();
})
