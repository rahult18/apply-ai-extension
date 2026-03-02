/**
 * API functions for fetching discovered jobs
 */

import { JobsListResponse, JobBoardProvider } from "@/types/jobs";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface FetchJobsParams {
  keyword?: string;
  provider?: JobBoardProvider;
  location?: string;
  remote?: boolean;
  limit?: number;
  offset?: number;
}

export async function fetchJobs(params: FetchJobsParams = {}): Promise<JobsListResponse> {
  const searchParams = new URLSearchParams();

  if (params.keyword) {
    searchParams.set("keyword", params.keyword);
  }
  if (params.provider) {
    searchParams.set("provider", params.provider);
  }
  if (params.location) {
    searchParams.set("location", params.location);
  }
  if (params.remote !== undefined) {
    searchParams.set("remote", String(params.remote));
  }
  if (params.limit) {
    searchParams.set("limit", String(params.limit));
  }
  if (params.offset !== undefined) {
    searchParams.set("offset", String(params.offset));
  }

  const queryString = searchParams.toString();
  const url = `${API_URL}/jobs${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch jobs: ${response.statusText}`);
  }

  return response.json();
}
