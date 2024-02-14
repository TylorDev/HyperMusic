export function Album(album) {
  return <div className="album-cover">
    <div id="cover">
      <img src={album} alt="Album Cover" />
    </div>
  </div>;
}
