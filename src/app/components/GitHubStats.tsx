'use client';

import { useEffect, useState } from 'react';
import { Github, Users, GitBranch, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  avatar_url: string;
}

interface Stats {
  totalRepos: number;
  followers: number;
  following: number;
  stars: number;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'bibash21-creator';
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!userResponse.ok) throw new Error('Failed to fetch GitHub data');

        const userData: GitHubUser = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!reposResponse.ok) throw new Error('Failed to fetch repos');

        const repos = await reposResponse.json();
        const totalStars = repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0);

        setStats({
          totalRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          stars: totalStars,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback stats
        setStats({
          totalRepos: 9,
          followers: 0,
          following: 0,
          stars: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-600 dark:text-gray-400">Loading GitHub stats...</p>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const statCards = [
    {
      icon: GitBranch,
      label: 'Repositories',
      value: stats.totalRepos,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Users,
      label: 'Followers',
      value: stats.followers,
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: Star,
      label: 'Total Stars',
      value: stats.stars,
      color: 'text-yellow-600 dark:text-yellow-400',
    },
  ];

  return (
    <motion.div
      className="rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
          <Github className="w-6 h-6 text-white dark:text-gray-900" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">GitHub Stats</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Open source contributions</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.a
        href="https://github.com/bibash21-creator"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full text-center py-3 rounded-lg bg-gradient-to-r from-gray-900 to-black dark:from-gray-600 dark:to-gray-800 text-white font-semibold hover:shadow-lg transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View GitHub Profile
      </motion.a>
    </motion.div>
  );
}
