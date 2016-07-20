export default (routePath, urlTokens) => {
  const routeTokens = routePath.match(/\(?\/?:[-\w]+\)?/gi);
  let finalUrl = routePath;
  routeTokens.forEach(token => {
    const urlToken = urlTokens[token.match(/[-\w]+/gi)];
    const rep = (urlToken === undefined) ? '' : `/${urlToken}`;
    finalUrl = finalUrl.replace(token, rep);
  });
  return finalUrl;
};
