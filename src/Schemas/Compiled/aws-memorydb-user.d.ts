/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::MemoryDB::User
 */
export interface AwsMemorydbUser {
  /**
   * Indicates the user status. Can be "active", "modifying" or "deleting".
   */
  Status?: string;
  /**
   * The name of the user.
   */
  UserName: string;
  /**
   * Access permissions string used for this user account.
   */
  AccessString: string;
  AuthenticationMode: {
    /**
     * Type of authentication strategy for this user.
     */
    Type?: "password";
    /**
     * Passwords used for this user account. You can create up to two passwords for each user.
     */
    Passwords?: [string] | [string, string];
  };
  /**
   * The Amazon Resource Name (ARN) of the user account.
   */
  Arn?: string;
  /**
   * An array of key-value pairs to apply to this user.
   */
  Tags?:
    | []
    | [Tag]
    | [Tag, Tag]
    | [Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ];
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws: or memorydb:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws: or memorydb:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
