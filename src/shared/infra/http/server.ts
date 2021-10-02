import { app } from "./app";
import dayjs from "dayjs";

app.listen(process.env.PORT, () => {
  const toDay = dayjs().format("DD/MM/YYYY HH:mm");
  console.log(`CreatePrismaTest is running now!! ${toDay}`);
});
