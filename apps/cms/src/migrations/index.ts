import * as migration_20260315_010952 from './20260315_010952';

export const migrations = [
  {
    up: migration_20260315_010952.up,
    down: migration_20260315_010952.down,
    name: '20260315_010952'
  },
];
