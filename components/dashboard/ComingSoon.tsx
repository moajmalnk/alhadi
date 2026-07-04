export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="dash-coming-soon">
      <p className="dash-label mb-2">Dashboard</p>
      <h1 className="dash-page-title text-dark">{title}</h1>
      <p className="text-muted mb-0">Coming soon</p>
    </div>
  );
}
