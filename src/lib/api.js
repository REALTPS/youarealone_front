import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.0.76:4500/api',
  timeout: 1000,
});

export const getcandidate = () => {
  let c;
  instance({
    method: 'get',
    url: '/posts/candidate',
  })
    .then(response => {
      if (response.data.confirm === 'getcandidate') {
        c = response.data.candidate;
        if (!this.comparison(c)) {
          this.IO = c;
        }
      }
    })
    .catch(err => {
      this.IO = [];
      return;
    });
};

export const gethistory = () => {
  instance({
    method: 'get',
    url: '/gets/history',
  }).then(response => {
    if (response.data.confirm === 'OK') {
      this.setState({ history: response.data.history });
    }
  });
};
