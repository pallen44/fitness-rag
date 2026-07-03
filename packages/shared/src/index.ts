export type WorkspacePackage = {
  name: string;
  description: string;
};

export const sharedPackage: WorkspacePackage = {
  name: "@fitness-rag/shared",
  description: "Shared placeholder package for cross-app contracts"
};
