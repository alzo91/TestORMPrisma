import { prismaConn } from "./ConnPrisma";

async function listenDatabase() {
  console.log("!!starting listen to users");
  prismaConn.$on("beforeExit", () => {
    console.log("beforeExet");
  });
  prismaConn.$use(async (params, next) => {
    if (params.model === "Users" && params.action === "findFirst") {
      console.log("==> listenUsers findFirst...");
      console.log("==> It was required ");
      console.log("<== listenUsers findFirst...");
    }

    if (params.model === "Users" && params.action === "create") {
      console.log("==> listenUsers create...");
      console.log("<== listenUsers create...");
    }

    const result = await next(params);

    console.log(`${params.model} was ${params.action}`, JSON.stringify(result));
    return result;
  });
}

export default listenDatabase;
