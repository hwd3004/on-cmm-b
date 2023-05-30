import prisma from "@src/prisma";

export default {
  Query: {
    users: async (params: any) => {
      try {
        const allusers = await prisma.user.findMany();

        console.log(allusers);

        return allusers;
      } catch (error) {
        return error;
      }
    },
  },
};
