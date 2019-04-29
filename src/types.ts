export type ValidState = 'running' | 'scheduled' | 'passed' | 'failed' | 'blocked' | 'canceled' |
  'canceling' | 'skipped' | 'not_run' | 'finished';

export type MetaData = {
  key: string;
  value: string;
};

export interface BuildsQueryParams {
  /**
   * Index Signature
   */
  [key: string]: string | ValidState[] | MetaData | string[];
  /**
   * Filters the results by the user who created the build
   */
  creator?: string;
  /**
   * Filters the results by builds created on or after the given time (in ISO 8601 format)
   */
  created_from?: string;
  /**
   * Filters the results by builds finished on or after the given time (in ISO 8601 format)
   */
  finished_from?: string;
  /**
   * Filters the results by the given build state. The finished state is a shortcut to
   * automatically search for builds with passed, failed, blocked, canceled states.
   */
  states?: ValidState[];
  /**
   * Filters the results by the given meta_data.
   */
  meta_data: MetaData;
  /**
   * Filters the results by the given branch or branches.
   */
  branches: string[];
  /**
   * Filters the results by the commit (only works for full sha, not for shortened ones).
   */
  commit: string;
}

export interface Artifact {
  /**
   * ID of the artifact
   */
  id: string;
  /**
   * ID of the job
   */
  job_id: string;
  /**
   * Canonical API URL of the artifact
   */
  url: string;
  /**
   * Artifact Download API URL for the artifact
   */
  download_url: string;
  /**
   * State of the artifact (new, error, finished, deleted)
   */
  state: string;
  /**
   * Path of the artifact
   */
  path: string;
  /**
   * Path of the artifact excluding the filename
   */
  dirname: string;
  /**
   * Filename of the artifact
   */
  filename: string;
  /**
   * Mime type of the artifact
   */
  mime_type: string;
  /**
   * File size of the artifact in bytes
   */
  file_size: string;
  /**
   * Original glob path used to upload the artifact
   */
  glob_path: string;
  /**
   * Original full file path of the artifact
   */
  orginial_path: string;
  /**
   * SHA-1 hash of artifact contents as calculated by the agent
   */
  sha1sum: string;
}
