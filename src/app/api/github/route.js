export const GET = async () => {
  const username = "theabsparrow";
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  };
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers,
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return Response.json({ error: "GitHub API error" }, { status: 500 });
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return Response.json({
      followers: user.followers,
      stars: totalStars,
      forks: totalForks,
      publicRepos: user.public_repos,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
};
