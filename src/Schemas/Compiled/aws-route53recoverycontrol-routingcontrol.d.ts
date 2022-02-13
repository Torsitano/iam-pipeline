/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * AWS Route53 Recovery Control Routing Control resource schema .
 */
export interface AwsRoute53RecoverycontrolRoutingcontrol {
  /**
   * The Amazon Resource Name (ARN) of the routing control.
   */
  RoutingControlArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   */
  ControlPanelArn?: string;
  /**
   * The name of the routing control. You can use any non-white space character in the name.
   */
  Name: string;
  /**
   * The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status?: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
  /**
   * Arn associated with Control Panel
   */
  ClusterArn?: string;
}
