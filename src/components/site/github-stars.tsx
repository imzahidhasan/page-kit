"use client";

import { useState, useEffect } from "react";
import { GitHubIcon } from "@/assets/icons/github";
import { GitHubStarsProps } from "@/types/types";

// Session-based cache for GitHub stars
const starsCache = new Map<string, number>();
const loadingStates = new Map<string, Promise<number>>();

export const GitHubStars = ({
  repository,
  className = "",
}: GitHubStarsProps) => {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      // Check if we already have cached data for this repository
      if (starsCache.has(repository)) {
        setStars(starsCache.get(repository)!);
        setLoading(false);
        return;
      }

      // Check if there's already a fetch in progress for this repository
      if (loadingStates.has(repository)) {
        try {
          const starCount = await loadingStates.get(repository)!;
          setStars(starCount);
        } catch (error) {
          console.error("Error fetching GitHub stars:", error);
        } finally {
          setLoading(false);
        }
        return;
      }

      // Create a new fetch promise
      const fetchPromise = (async () => {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${repository}`,
            {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            const starCount = data.stargazers_count;

            // Cache the result for the session
            starsCache.set(repository, starCount);
            return starCount;
          } else {
            throw new Error(`HTTP ${response.status}`);
          }
        } catch (error) {
          throw error;
        } finally {
          // Remove from loading states once done
          loadingStates.delete(repository);
        }
      })();

      // Store the promise to prevent duplicate requests
      loadingStates.set(repository, fetchPromise);

      try {
        const starCount = await fetchPromise;
        setStars(starCount);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [repository]);

  const formatStars = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <GitHubIcon className="h-4 w-4 fill-zinc-950 dark:fill-zinc-50" />
      {loading ? (
        <span className="text-xs text-zinc-600 dark:text-zinc-400 animate-pulse">
          ...
        </span>
      ) : stars !== null ? (
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {formatStars(stars)}
        </span>
      ) : null}
    </div>
  );
};
