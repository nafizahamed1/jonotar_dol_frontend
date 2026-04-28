import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type Leader = {
  _id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  createdAt?: string;
  updatedAt?: string;
};

const ManageLeaders = () => {
  const navigate = useNavigate();

  const [leaders, setLeaders] = useState<Leader[]>([]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  const resetForm = () => {
    setName("");
    setPosition("");
    setBio("");
    setFacebook("");
    setTwitter("");
    setLinkedin("");
    setImage("");
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!name.trim() || !position.trim()) return;

    if (editingId) {
      setLeaders((prev) =>
        prev.map((leader) =>
          leader._id === editingId
            ? {
                ...leader,
                name,
                position,
                bio,
                facebook,
                twitter,
                linkedin,
                image,
                updatedAt: new Date().toISOString(),
              }
            : leader
        )
      );
    } else {
      const newLeader: Leader = {
        _id: Date.now().toString(),
        name,
        position,
        bio,
        facebook,
        twitter,
        linkedin,
        image,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setLeaders((prev) => [...prev, newLeader]);
    }

    resetForm();
  };

  const handleEdit = (leader: Leader) => {
    setEditingId(leader._id);

    setName(leader.name);
    setPosition(leader.position);
    setBio(leader.bio || "");
    setFacebook(leader.facebook || "");
    setTwitter(leader.twitter || "");
    setLinkedin(leader.linkedin || "");
    setImage(leader.image);
  };

  const handleDelete = (_id: string) => {
    setLeaders((prev) => prev.filter((leader) => leader._id !== _id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-4 sm:p-6 relative">

      <button
        onClick={() => navigate("/admin")}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50
        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm font-medium
        rounded-full
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-white/20 transition-all duration-300"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Leader Management
        </h1>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 mb-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Leader Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 outline-none"
            />

            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 outline-none"
            />

            <textarea
              placeholder="Leader Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="sm:col-span-2 px-4 py-3 rounded-lg bg-black/40 border border-white/20 outline-none resize-none"
            />

            <input
              type="text"
              placeholder="Facebook Link"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 outline-none"
            />

            <input
              type="text"
              placeholder="Twitter Link"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 outline-none"
            />

            <input
              type="text"
              placeholder="LinkedIn Link"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="sm:col-span-2 px-4 py-3 rounded-lg bg-black/40 border border-white/20 outline-none"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="sm:col-span-2 text-sm"
            />

          </div>

          {image && (
            <img
              src={image}
              alt="preview"
              className="w-28 h-28 rounded-full object-cover mx-auto mt-5 border-2 border-green-500"
            />
          )}

          <div className="flex gap-3 mt-5">

            <button
              onClick={handleSubmit}
              className="flex-1 py-3 rounded-lg font-semibold
              bg-gradient-to-r from-green-500 to-green-700
              hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              {editingId ? "Update Leader" : "Add Leader"}
            </button>

            <button
              onClick={resetForm}
              className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              Reset
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {leaders.length === 0 && (
            <p className="text-gray-400 text-center col-span-full">
              No leaders added
            </p>
          )}

          {leaders.map((leader) => (
            <div
              key={leader._id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300"
            >

              <img
                src={leader.image}
                alt={leader.name}
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-green-500 mb-4"
              />

              <h2 className="text-lg font-bold text-center">
                {leader.name}
              </h2>

              <p className="text-green-400 text-sm text-center mb-3">
                {leader.position}
              </p>

              {leader.bio && (
                <p className="text-gray-300 text-sm mb-4 line-clamp-4 text-center">
                  {leader.bio}
                </p>
              )}

              <div className="space-y-2 mb-4 text-xs text-gray-300">

                {leader.facebook && (
                  <p>Facebook: {leader.facebook}</p>
                )}

                {leader.twitter && (
                  <p>Twitter: {leader.twitter}</p>
                )}

                {leader.linkedin && (
                  <p>LinkedIn: {leader.linkedin}</p>
                )}

              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => handleEdit(leader)}
                  className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(leader._id)}
                  className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
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