/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Transfer::User
 */
export interface AwsTransferUser {
  Policy?: string;
  Role: string;
  HomeDirectory?: string;
  HomeDirectoryType?: string;
  ServerId: string;
  UserName: string;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[];
  PosixProfile?: PosixProfile;
  SshPublicKeys?: SshPublicKey[];
  Id?: string;
  Arn?: string;
  Tags?: Tag[];
}
export interface HomeDirectoryMapEntry {
  Entry: string;
  Target: string;
}
export interface PosixProfile {
  Uid: number;
  SecondaryGids?: number[];
  Gid: number;
}
export interface SshPublicKey {}
export interface Tag {
  Value: string;
  Key: string;
}
