interface YouTubeProps {
  videoId: string;
  title?: string;
}

export const YouTube: React.FC<YouTubeProps> = ({
  videoId,
  title = "YouTube Player",
}) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      overflow: "hidden",
      marginBottom: "1rem",
    }}
  >
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  </div>
);

export default YouTube;
