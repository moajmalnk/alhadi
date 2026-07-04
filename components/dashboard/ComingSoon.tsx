export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center py-12 px-4">
      <p className="text-uppercase text-muted fw-medium mb-2 ls-wide">
        Dashboard
      </p>
      <h1 className="display-6 fw-bold text-dark mb-3">{title}</h1>
      <p className="fs-4 text-muted mb-0">Coming soon</p>
    </div>
  );
}
