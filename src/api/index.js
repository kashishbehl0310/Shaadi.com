import config from "../../config/appConfig";

const fetchUsers = (cb, data) => {
  const { apiUrl } = config;
  console.log(apiUrl);
  let queryParam = "";
  if (data.page) {
    queryParam = `&page=${data.page}`;
  }
  fetch(`${apiUrl}?per_page=4${queryParam}`)
  .then(res => res.json())
  .then(data => cb(null, data))
  .catch(err => cb(err))
}

export default fetchUsers;
