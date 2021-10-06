const callToApi = (serie) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${serie}`)
    .then((response) => response.json())
    .then((response) => {
      const shows = response.map((serie) => {
        return {
          name: serie.show.name,
        };
      });
      return shows;
    });
};

export default callToApi;
