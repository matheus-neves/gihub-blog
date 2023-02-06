import ContentLoader from 'react-content-loader';

export function ProfileSkeleton() {
  return (
    <ContentLoader
      width="100%"
      height={148}
      viewBox="0 0 100% 148"
      backgroundOpacity={0.1}
      foregroundOpacity={0.2}
      backgroundColor="#AFC2D4"
      foregroundColor="#f1f1f1"
    >
      {/* Image */}
      <rect x="0" y="0" rx="8" ry="8" width="148" height="148" />

      {/* Title */}
      <rect x="180" y="24" rx="3" ry="3" width="356" height="18" />

      {/* Description */}
      <rect x="180" y="70" rx="3" ry="3" width="500" height="12" />
      <rect x="180" y="90" rx="3" ry="3" width="480" height="12" />

      {/* Items */}
      <rect x="180" y="120" rx="3" ry="3" width="80" height="12" />
      <rect x="280" y="120" rx="3" ry="3" width="80" height="12" />
      <rect x="380" y="120" rx="3" ry="3" width="80" height="12" />

      {/* Link */}
      <rect x="720" y="20" rx="3" ry="3" width="62" height="15" />
    </ContentLoader>
  );
}
