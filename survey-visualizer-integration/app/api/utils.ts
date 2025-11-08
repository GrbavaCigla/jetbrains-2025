export async function resolve(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  session?: string | null
): Promise<Object | null> {
  input =
    session === null || session === undefined
      ? input
      : `${input}?=token=${session}`;

  // let opts: RequestInit = init == undefined ? {} : init;
  // For some reason opentrivia doesn't allow this in some of its endpoints
  // opts.headers = { "Content-Type": "application/json" };

  return await fetch(input)
    .then(async (resp) => {
      const text = await resp.text();
      const to_return = text == "" ? null : JSON.parse(text);

      return resp.ok ? to_return : null;
    })
    .catch((reason) => {
      return null;
    });
}
