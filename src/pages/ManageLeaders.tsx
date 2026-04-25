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
    <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black p-4 sm:p-6 text-white">

  <button
    onClick={() => navigate("/admin")}
    className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50
    px-3 py-1.5 sm:px-4 sm:py-2
    text-xs sm:text-sm font-medium text-white
    rounded-full
    bg-white/10 backdrop-blur-md border border-white/20
    shadow-md hover:scale-105 transition flex items-center gap-1"
  >
    ← Back
  </button>

  <div className="max-w-5xl mx-auto">

    <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-center sm:text-left text-white">
      Leader Management
    </h1>

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 shadow-lg">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        <input
          type="text"
          placeholder="Leader Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm sm:text-base"
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm sm:text-base"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="sm:col-span-2 text-xs sm:text-sm"
        />

      </div>

      {image && (
        <img
          src={image}
          alt="preview"
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mx-auto mt-4 border-2 border-green-500"
        />
      )}

      <button
        onClick={handleSubmit}
        className="w-full mt-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base
        bg-gradient-to-r from-green-500 to-green-700
        active:scale-95 transition"
      >
        {editingId ? "Update Leader" : "Add Leader"}
      </button>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

      {leaders.length === 0 && (
        <p className="text-gray-400 col-span-full text-center text-sm">
          No leaders added
        </p>
      )}

      {leaders.map((leader) => (
        <div
          key={leader.id}
          className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
        >

          {leader.image && (
            <img
              src={leader.image}
              alt={leader.name}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-cover mb-2 sm:mb-3 border-2 border-green-500"
            />
          )}

          <h2 className="text-base sm:text-lg font-semibold">
            {leader.name}
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
            {leader.position}
          </p>

          <div className="flex gap-2">

            <button
              onClick={() => handleEdit(leader)}
              className="flex-1 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(leader.id)}
              className="flex-1 py-1.5 sm:py-2 text-xs sm:text-sm bg-red-600 rounded"
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