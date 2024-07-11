import { BucketMigration } from './BucketMigration'
import { DatabaseMigration } from './DatabaseMigration'

DatabaseMigration.execute()
BucketMigration.execute()
