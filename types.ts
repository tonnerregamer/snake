export interface GameFeature {
  id: string;
  title: string;
  description: string;
  icon: 'zap' | 'shield' | 'users' | 'code';
}

export interface SystemRequirement {
  label: string;
  value: string;
}

export enum DownloadStatus {
  IDLE = 'IDLE',
  DOWNLOADING = 'DOWNLOADING',
  COMPLETED = 'COMPLETED'
}