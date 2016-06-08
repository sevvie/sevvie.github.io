import github from 'octonode';

export class GithubHelper {
  static fetchRecent() {
    let me = github.client().user('sevvie');
    let rev = [];
    me.events({page: 1, per_page: 10}, (e, body, headers) => {
      rev = JSON.parse(body);
    });
    return rev;
  }
}
