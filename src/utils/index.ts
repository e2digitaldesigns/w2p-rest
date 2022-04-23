export const domainNameParser = async (
  data: string | undefined
): Promise<string> => {
  if (
    data === "http://localhost:3000" ||
    data === "http://localhost:3001" ||
    data === "http://localhost:3002" ||
    data === undefined
  )
    return "e2ps.com";

  let result, match;

  if (
    (match = data.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
    ))
  ) {
    result = match[1];
    if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
      result = match[1];
    }
  }
  return result || "";
};

export const databaseParser = async (data?: string): Promise<string> => {
  const domain = await domainNameParser(data);
  return domain.replace(".", "_");
};
