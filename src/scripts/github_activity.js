const fetchGithubActivity = (username, day, action) => {
  let url = `https://gh-contrib-api.herokuapp.com/${username}/count`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const activity = Number.parseInt(data.data[day.getFullYear()][day.getMonth() + 1][day.getDate()], 10);
      action(activity);
    });
};

export default fetchGithubActivity;
