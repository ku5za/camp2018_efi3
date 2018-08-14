const data = {
    login: "efi",
    password: "camp"
  }
  
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: Qs.stringify(data),
    url: "https://efigence-camp.herokuapp.com/api/login",
  };
  
  axios(options).then((res) => {console.log(res)});