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
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!userResponse.ok) throw new Error('Failed to fetch GitHub data');

        const userData: GitHubUser = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!reposResponse.ok) throw new Error('Failed to fetch repos');

        const repos = await reposResponse.json();
        const totalStars = repos.reduce(
          (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
          0
        );

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
        <p className="text-center text-gray-600 dark:text-gray-400">
          Loading GitHub stats...
        </p>
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
      className="rounded-[2.5rem] overflow-hidden bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/5 p-10 shadow-2xl"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, margin: "-50px" }}
    >
      <div className="flex items-center gap-5 mb-10">
        <motion.div 
          className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center shadow-xl"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <Github className="w-8 h-8 text-white dark:text-gray-900" />
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Open Source Pulse
          </h3>
          <p className="text-md text-gray-600 dark:text-gray-400 font-medium">
            Real-time GitHub activity & contributions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              className="p-6 rounded-3xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-white/5 text-center group transition-all duration-300 hover:border-purple-500/30"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-1">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest font-black text-gray-500 dark:text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.a
        href="https://github.com/bibash21-creator"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 block w-full text-center py-5 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-lg hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        Explore Repositories
      </motion.a>
    </motion.div>
  );
}
