import PeelShell from './PeelShell';
import ConsolePanel from './ConsolePanel';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PeelShell consolePanel={<ConsolePanel />}>
      {children}
    </PeelShell>
  );
}
