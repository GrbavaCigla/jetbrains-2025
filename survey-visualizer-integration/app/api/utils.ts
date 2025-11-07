export async function resolve(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  session?: string | null
): Promise<Object | null> {
  input = session === null || session === undefined ? input : `${input}?=token=${session}`;

  let opts: RequestInit = init == undefined ? {} : init;
  opts.headers = { "Content-Type": "application/json" };

  return await fetch(input, opts)
    .then(async (resp) => {
      const text = await resp.text();
      const to_return = text == "" ? null : JSON.parse(text);

      return resp.ok
        ? to_return
        : null;
    })
    .catch((reason) => {
      return null;
    });
}