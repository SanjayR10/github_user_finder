class Github {
  constructor() {
    this.client_id = "5d9932b9cd2bf2861e7e";
    this.client_secret = "192d280fe307b8ea30d8dad8ff67e472455bc7c4";
    this.repo_count = 5;
    this.repo_sort = "created:asc";
  }

  async getUser(user) {
    //to fetch the api response
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    //to fetch the latest repoos
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
