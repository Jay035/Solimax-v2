export const ironOptions = {
  cookieName: "siwe",
  password: process?.env?.NEXT_PUBLIC_IRON_PASSWORD! as string,
  cookieOptions: {
    secure: process?.env?.NEXT_PUBLIC_NODE_ENV! === "production",
  },
};
