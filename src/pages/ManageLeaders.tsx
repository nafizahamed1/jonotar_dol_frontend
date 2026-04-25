import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type Leader = {
  id: number;
  name: string;
  position: string;
  image: string;
};

const ManageLeaders = () => {
  const navigate = useNavigate(); 

  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleSubmit = () => {
    if (!name.trim() || !position.trim()) return;

    if (editingId !== null) {
      setLeaders((prev) =>
        prev.map((l) =>
          l.id === editingId ? { ...l, name, position, image } : l
        )
      );
      setEditingId(null);
    } else {
      const newLeader: Leader = {
        id: Date.now(),
        name,
        position,
        image,
      };
      setLeaders([...leaders, newLeader]);
    }

    setName("");
    setPosition("");
    setImage("");
  };

  const handleEdit = (leader: Leader) => {
    setName(leader.name);
    setPosition(leader.position);
    setImage(leader.image);
    setEditingId(leader.id);
  };

  const handleDelete = (id: number) => {
    setLeaders(leaders.filter((l) => l.id !== id));
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black p-6 text-white">

      <button
        onClick={() => navigate("/admin")}
        className="absolute top-6 left-6 z-50 px-5 py-2.5 rounded-xl
        text-white font-medium
        bg-gradient-to-r from-green-600 to-red-600
        shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]
        hover:scale-105 active:scale-95
        transition-all duration-300"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Leader Management</h1>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl mb-8 shadow-lg">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Leader Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white"
            />

            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="md:col-span-2 text-sm"
            />

          </div>

          {image && (
            <img
              src={image}
              alt="preview"
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4 border-2 border-green-500"
            />
          )}

          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-3 rounded-lg font-semibold
            bg-gradient-to-r from-green-500 to-green-700
            hover:scale-105 transition"
          >
            {editingId ? "Update Leader" : "Add Leader"}
          </button>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {leaders.length === 0 && (
            <p className="text-gray-400 col-span-full text-center">
              No leaders added
            </p>
          )}

          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
            >

              {leader.image && (
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-3 border-2 border-green-500"
                />
              )}

              <h2 className="text-lg font-semibold">
                {leader.name}
              </h2>

              <p className="text-gray-300 text-sm mb-3">
                {leader.position}
              </p>

              <div className="flex justify-center gap-2">

                <button
                  onClick={() => handleEdit(leader)}
                  className="px-3 py-1 text-sm bg-blue-600 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(leader.id)}
                  className="px-3 py-1 text-sm bg-red-600 rounded"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ManageLeaders;