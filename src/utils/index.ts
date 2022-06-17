export async function sleep(timeout = 1000): Promise<null> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
