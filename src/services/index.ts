export const fetcher = (path: string) =>
  fetch(`${process.env.BASE_URL}${path}`)
    .then((data) => data.json())
    .catch((error) => console.log('Error' + error))
