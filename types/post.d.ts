import type { ExcersisePreview } from './excersise';
import type { PublicUser } from './user';

export type PostType = 'routine_creation';

export interface Post {
  user: PublicUser;
  exercises: ExcersisePreview[];
  createdAt: string;
  type: PostType;
  id: string;
}
