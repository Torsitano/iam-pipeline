/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DataBundleArn = string;

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export interface AwsFinspaceEnvironment {
  /**
   * Unique identifier for representing FinSpace Environment
   */
  EnvironmentId?: string;
  /**
   * Name of the Environment
   */
  Name: string;
  /**
   * AWS account ID associated with the Environment
   */
  AwsAccountId?: string;
  /**
   * Description of the Environment
   */
  Description?: string;
  /**
   * State of the Environment
   */
  Status?:
    | "CREATE_REQUESTED"
    | "CREATING"
    | "CREATED"
    | "DELETE_REQUESTED"
    | "DELETING"
    | "DELETED"
    | "FAILED_CREATION"
    | "FAILED_DELETION"
    | "RETRY_DELETION"
    | "SUSPENDED";
  /**
   * URL used to login to the Environment
   */
  EnvironmentUrl?: string;
  /**
   * ARN of the Environment
   */
  EnvironmentArn?: string;
  /**
   * SageMaker Studio Domain URL associated with the Environment
   */
  SageMakerStudioDomainUrl?: string;
  /**
   * KMS key used to encrypt customer data within FinSpace Environment infrastructure
   */
  KmsKeyId?: string;
  /**
   * ID for FinSpace created account used to store Environment artifacts
   */
  DedicatedServiceAccountId?: string;
  /**
   * Federation mode used with the Environment
   */
  FederationMode?: "LOCAL" | "FEDERATED";
  FederationParameters?: FederationParameters;
  SuperuserParameters?: SuperuserParameters;
  /**
   * ARNs of FinSpace Data Bundles to install
   */
  DataBundles?: DataBundleArn[];
}
/**
 * Additional parameters to identify Federation mode
 */
export interface FederationParameters {
  /**
   * SAML metadata URL to link with the Environment
   */
  SamlMetadataURL?: string;
  /**
   * Federation provider name to link with the Environment
   */
  FederationProviderName?: string;
  /**
   * SAML metadata document to link the federation provider to the Environment
   */
  SamlMetadataDocument?: string;
  /**
   * SAML metadata URL to link with the Environment
   */
  ApplicationCallBackURL?: string;
  /**
   * SAML metadata URL to link with the Environment
   */
  FederationURN?: string;
  /**
   * Attribute map for SAML configuration
   */
  AttributeMap?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * Parameters of the first Superuser for the FinSpace Environment
 */
export interface SuperuserParameters {
  /**
   * First name
   */
  FirstName?: string;
  /**
   * Last name
   */
  LastName?: string;
  /**
   * Email address
   */
  EmailAddress?: string;
  [k: string]: unknown;
}
