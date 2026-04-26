import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: photos } = await supabase
    .from("photos")
    .select("*")
    .eq("status", "approved")
    .limit(20);

  return (
    <main style={{ padding: "40px" }}>
      <h1>ARTFreeLife</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {photos?.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.image_url}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
