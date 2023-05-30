import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import MutationResponse from "@src/Interface/MutationResponse.interface";
import User from "@src/Interface/User.interface";
import prisma from "@src/prisma";

export default {
  Mutation: {
    createAccount: async (parent: any, args: User, context: any, info: any): Promise<MutationResponse> => {
      try {
        const { userId, password, confirmPassword } = args;

        const user = await prisma.user.create({
          data: {
            userId,
            password,
            confirmPassword,
          },
        });

        console.log(user);

        return {
          result: true,
        };
      } catch (error) {
        console.trace(error);

        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code == "P2002") {
            if (error.meta && error.meta.target && error.meta.target == "userId") {
              return {
                result: false,
                error: "UserId already exists",
              };
            }
          }
        }

        return {
          result: false,
          error: "Failed to create account",
        };
      }
    },
  },
};
