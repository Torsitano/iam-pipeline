/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGateway::UsagePlan
 */
export interface AwsApigatewayUsageplan {
  /**
   * The provider-assigned unique ID for this managed resource.
   */
  Id?: string;
  /**
   * The API stages to associate with this usage plan.
   */
  ApiStages?: ApiStage[];
  /**
   * A description of the usage plan.
   */
  Description?: string;
  /**
   * Configures the number of requests that users can make within a given interval.
   */
  Quota?: {
    /**
     * The maximum number of requests that users can make within the specified time period.
     */
    Limit?: number;
    /**
     * For the initial time period, the number of requests to subtract from the specified limit. When you first implement a usage plan, the plan might start in the middle of the week or month. With this property, you can decrease the limit for this initial time period.
     */
    Offset?: number;
    /**
     * The time period for which the maximum limit of requests applies, such as DAY or WEEK. For valid values, see the period property for the UsagePlan resource in the Amazon API Gateway REST API Reference.
     */
    Period?: string;
  };
  /**
   * An array of arbitrary tags (key-value pairs) to associate with the usage plan.
   */
  Tags?: Tag[];
  /**
   * Configures the overall request rate (average requests per second) and burst capacity.
   */
  Throttle?: {
    /**
     * The maximum API request rate limit over a time ranging from one to a few seconds. The maximum API request rate limit depends on whether the underlying token bucket is at its full capacity.
     */
    BurstLimit?: number;
    /**
     * The API request steady-state rate limit (average requests per second over an extended period of time).
     */
    RateLimit?: number;
  };
  /**
   * A name for the usage plan.
   */
  UsagePlanName?: string;
}
export interface ApiStage {
  /**
   * The ID of an API that is in the specified Stage property that you want to associate with the usage plan.
   */
  ApiId?: string;
  /**
   * The name of the stage to associate with the usage plan.
   */
  Stage?: string;
  /**
   * Map containing method-level throttling information for an API stage in a usage plan. The key for the map is the path and method for which to configure custom throttling, for example, '/pets/GET'. Duplicates are not allowed.
   */
  Throttle?: {
    [k: string]: ThrottleSettings;
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface ThrottleSettings {
  /**
   * The maximum API request rate limit over a time ranging from one to a few seconds. The maximum API request rate limit depends on whether the underlying token bucket is at its full capacity.
   */
  BurstLimit?: number;
  /**
   * The API request steady-state rate limit (average requests per second over an extended period of time).
   */
  RateLimit?: number;
}
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
