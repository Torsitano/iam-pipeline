/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElastiCache::User
 */
export interface AwsElasticacheUser {
  /**
   * Indicates the user status. Can be "active", "modifying" or "deleting".
   */
  Status?: string;
  /**
   * The ID of the user.
   */
  UserId: string;
  /**
   * The username of the user.
   */
  UserName: string;
  /**
   * Must be redis.
   */
  Engine: "redis";
  /**
   * Access permissions string used for this user account.
   */
  AccessString?: string;
  /**
   * Indicates a password is not required for this user account.
   */
  NoPasswordRequired?: boolean;
  /**
   * Passwords used for this user account. You can create up to two passwords for each user.
   */
  Passwords?: string[];
  /**
   * The Amazon Resource Name (ARN) of the user account.
   */
  Arn?: string;
}
