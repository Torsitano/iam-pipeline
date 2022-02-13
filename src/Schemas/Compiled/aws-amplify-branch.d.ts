/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::Amplify::Branch resource creates a new branch within an app.
 */
export interface AwsAmplifyBranch {
  AppId: string;
  Arn?: string;
  BasicAuthConfig?: BasicAuthConfig;
  BranchName: string;
  BuildSpec?: string;
  Description?: string;
  EnableAutoBuild?: boolean;
  EnablePerformanceMode?: boolean;
  EnablePullRequestPreview?: boolean;
  EnvironmentVariables?: EnvironmentVariable[];
  PullRequestEnvironmentName?: string;
  Stage?: "EXPERIMENTAL" | "BETA" | "PULL_REQUEST" | "PRODUCTION" | "DEVELOPMENT";
  Tags?: Tag[];
}
export interface BasicAuthConfig {
  EnableBasicAuth?: boolean;
  Username: string;
  Password: string;
}
export interface EnvironmentVariable {
  Name: string;
  Value: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
