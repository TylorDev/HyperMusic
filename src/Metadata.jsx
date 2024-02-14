export function Metadata({ music = { autor: "0", name: "0", year: "0" } }) {
  const { autor, name, year } = music;
  return (
    <div className="song-details">
     
      <div className="name"  title={name}>{name} </div>
      <div className ="year">{year}</div>
      <div className="autor">{autor}</div>

    </div>
  );
}