"use client";
import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { PiGitFork } from "react-icons/pi";
import { IoGitBranchOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import SkeletonLoader from "./Sceleton";

const GithubState = () => {
  const [stats, setStats] = useState(null);
  const [commits, setCommits] = useState(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  useEffect(() => {
    fetch("/api/github-commits")
      .then((res) => res.json())
      .then((data) => setCommits(data.commits));
  }, []);

  const githubStats = [
    { icon: IoIosStarOutline, numberData: stats?.stars, name: "starts" },
    { icon: IoGitBranchOutline, numberData: commits, name: "commits" },
    { icon: PiGitFork, numberData: stats?.forks, name: "forks" },
    { icon: PiGitFork, numberData: stats?.publicRepos, name: "repositories" },
    { icon: FiUsers, numberData: stats?.followers, name: "Github followers" },
  ];

  return (
    <div>
      {!stats || commits === null ? (
        <SkeletonLoader />
      ) : (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 mt-2">
          {githubStats.map((githubStat) => (
            <Link
              key={githubStat?.name}
              href={`${process.env.NEXT_PUBLIC_GITHUB_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl hover:text-blue-500 hover:bg-gray-600 rounded-xl px-2 duration-500"
            >
              {" "}
              <githubStat.icon /> {githubStat?.numberData} {githubStat?.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GithubState;
