const routesPublic = ["/manager", "/"];

export const onRequest = (async (context, next) => {
  const auth = context.cookies.get("auth");

  if (routesPublic.includes(context.url.pathname)) {
    if (context.url.pathname === "/manager" && auth) {
      return context.redirect("/manager/dashboard");
    }

    return next();
  }

  if (!auth) {
    return context.redirect("/manager");
  }
  return next();
});