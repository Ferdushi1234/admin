import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        // Perform database operations

        if (
          credentials?.email === process.env.EMAIL_URL &&
          credentials?.password === process.env.PASSWORD_URL
        ) {
          return {
            id: "1",
            email: 'process.env.EMAIL_URL',
          };
        }

        return null;
      },
    }),
  ],

};
