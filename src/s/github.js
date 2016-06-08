import github from 'octonode';

export class GithubHelper {
  static fetchRecent() {
    let me = github.client().user('sevvie');
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}
