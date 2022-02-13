/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate
 */
export interface AwsLightsailLoadbalancertlscertificate {
  /**
   * The name of your load balancer.
   */
  LoadBalancerName: string;
  /**
   * The SSL/TLS certificate name.
   */
  CertificateName: string;
  /**
   * The domain name (e.g., example.com ) for your SSL/TLS certificate.
   */
  CertificateDomainName: string;
  /**
   * An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.
   */
  CertificateAlternativeNames?: string[];
  LoadBalancerTlsCertificateArn?: string;
  /**
   * When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
   */
  IsAttached?: boolean;
  /**
   * The validation status of the SSL/TLS certificate.
   */
  Status?: string;
}
