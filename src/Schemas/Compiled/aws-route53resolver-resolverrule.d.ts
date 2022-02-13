/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Route53Resolver::ResolverRule
 */
export interface AwsRoute53ResolverResolverrule {
  /**
   * The ID of the endpoint that the rule is associated with.
   */
  ResolverEndpointId?: string;
  /**
   * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
   */
  DomainName: string;
  /**
   * The name for the Resolver rule
   */
  Name?: string;
  /**
   * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
   */
  RuleType: "FORWARD" | "SYSTEM" | "RECURSIVE";
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.
   */
  TargetIps?: TargetAddress[];
  /**
   * The Amazon Resource Name (ARN) of the resolver rule.
   */
  Arn?: string;
  /**
   * The ID of the endpoint that the rule is associated with.
   */
  ResolverRuleId?: string;
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
export interface TargetAddress {
  /**
   * One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
   */
  Ip: string;
  /**
   * The port at Ip that you want to forward DNS queries to.
   */
  Port?: string;
}
