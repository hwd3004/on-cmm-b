import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import MutationResponse from "@src/Interface/MutationResponse.interface";
import User from "@src/Interface/User.interface";
import prisma from "@src/prisma";

export default {
  Query: {
    login: async (parent: any, args: User, context: any, info: any): Promise<MutationResponse> => {
      try {
        const { userId, password } = args;

        const user = await prisma.user.findUniqueOrThrow({
          where: {
            userId,
          },
        });

        if (user.password !== password) {
          return {
            result: false,
            error: "Wrong password",
          };
        }

        console.log(user);

        return {
          result: true,
        };
      } catch (error) {
        console.trace(error);

        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code == "P2025") {
            return {
              result: false,
              error: "User not found",
            };
          }
        }

        return {
          result: false,
          error: "Unknown error",
        };
      }
    },
  },
};
