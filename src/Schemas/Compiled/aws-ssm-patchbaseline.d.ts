/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SSM::PatchBaseline
 */
export interface AwsSsmPatchbaseline {
  OperatingSystem?: string;
  Description?: string;
  ApprovalRules?: RuleGroup;
  Sources?: PatchSource[];
  Name: string;
  RejectedPatches?: string[];
  ApprovedPatches?: string[];
  RejectedPatchesAction?: string;
  PatchGroups?: string[];
  ApprovedPatchesComplianceLevel?: string;
  ApprovedPatchesEnableNonSecurity?: boolean;
  Id?: string;
  GlobalFilters?: PatchFilterGroup;
  Tags?: Tag[];
}
export interface RuleGroup {
  PatchRules?: Rule[];
}
export interface Rule {
  ApproveUntilDate?: PatchStringDate;
  ApproveAfterDays?: number;
  EnableNonSecurity?: boolean;
  ComplianceLevel?: string;
  PatchFilterGroup?: PatchFilterGroup;
}
export interface PatchStringDate {}
export interface PatchFilterGroup {
  PatchFilters?: PatchFilter[];
}
export interface PatchFilter {
  Values?: string[];
  Key?: string;
}
export interface PatchSource {
  Products?: string[];
  Configuration?: string;
  Name?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}