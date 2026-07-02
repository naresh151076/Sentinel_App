import type { ReactNode } from "react";
import { WorkspaceShell } from "@/components/layout/workspace-shell";
import { ActiveRequestProvider } from "@/contexts/active-request.context";

export default function WorkspaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ActiveRequestProvider>
      <WorkspaceShell>{children}</WorkspaceShell>
    </ActiveRequestProvider>
  );
}
