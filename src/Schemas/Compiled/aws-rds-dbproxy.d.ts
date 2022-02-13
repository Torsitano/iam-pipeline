/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::RDS::DBProxy
 */
export interface AwsRdsDbproxy {
  /**
   * The authorization mechanism that the proxy uses.
   */
  Auth: [AuthFormat, ...AuthFormat[]];
  /**
   * The Amazon Resource Name (ARN) for the proxy.
   */
  DBProxyArn?: string;
  /**
   * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
   */
  DBProxyName: string;
  /**
   * Whether the proxy includes detailed information about SQL statements in its logs.
   */
  DebugLogging?: boolean;
  /**
   * The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.
   */
  Endpoint?: string;
  /**
   * The kinds of databases that the proxy can connect to.
   */
  EngineFamily: "MYSQL" | "POSTGRESQL";
  /**
   * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
   */
  IdleClientTimeout?: number;
  /**
   * A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   */
  RequireTLS?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
   */
  RoleArn: string;
  /**
   * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
   */
  Tags?: TagFormat[];
  /**
   * VPC security group IDs to associate with the new proxy.
   */
  VpcSecurityGroupIds?: [string, ...string[]];
  /**
   * VPC subnet IDs to associate with the new proxy.
   */
  VpcSubnetIds: [string, string, ...string[]];
}
export interface AuthFormat {
  /**
   * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
   */
  AuthScheme?: "SECRETS";
  /**
   * A user-specified description about the authentication used by a proxy to log in as a specific database user.
   */
  Description?: string;
  /**
   * Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.
   */
  IAMAuth?: "DISABLED" | "REQUIRED";
  /**
   * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
   */
  SecretArn?: string;
  /**
   * The name of the database user to which the proxy connects.
   */
  UserName?: string;
  [k: string]: unknown;
}
export interface TagFormat {
  Key?: string;
  Value?: string;
  [k: string]: unknown;
}
