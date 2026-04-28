import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type News = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
};

const ManageNews = () => {
  const navigate = useNavigate();

  const [newsList, setNewsList] = useState<News[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    if (editingId) {
      setNewsList((prev) =>
        prev.map((item) =>
          item._id === editingId
            ? {
                ...item,
                title,
                description,
                image,
                updatedAt: new Date().toISOString(),
              }
            : item
        )
      );
    } else {
      const newNews: News = {
        _id: Date.now().toString(),
        title,
        description,
        image,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setNewsList((prev) => [newNews, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (item: News) => {
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image || "");
    setEditingId(item._id);
  };

  const handleDelete = (_id: string) => {
    setNewsList((prev) => prev.filter((item) => item._id !== _id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 sm:p-6 text-white relative">

      <button
        onClick={() => navigate("/admin")}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50
        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm font-medium text-white
        rounded-full bg-white/10 backdrop-blur-md border border-white/20
        shadow-[0_0_15px_rgba(255,255,255,0.2)]
        hover:bg-white/20 hover:scale-105 active:scale-95
        transition-all duration-300 flex items-center gap-1"
      >
        ← <span>Back</span>
      </button>

      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-center sm:text-left text-white">
          News Management
        </h1>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 shadow-lg">

          <div className="space-y-3 sm:space-y-4">

            <input
              type="text"
              placeholder="News Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm sm:text-base outline-none"
            />

            <textarea
              placeholder="News Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm sm:text-base outline-none resize-none"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full text-xs sm:text-sm"
            />

            {image && (
              <img
                src={image}
                alt="preview"
                className="w-full h-36 sm:h-48 object-cover rounded-xl border border-white/20"
              />
            )}

            <button
              onClick={handleSubmit}
              className="w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base
              bg-gradient-to-r from-green-500 to-green-700
              hover:scale-[1.02] active:scale-95
              transition-all duration-300"
            >
              {editingId ? "Update News" : "Add News"}
            </button>

          </div>
        </div>

        <div className="space-y-4">

          {newsList.length === 0 && (
            <p className="text-gray-400 text-center text-sm">
              No news available
            </p>
          )}

          {newsList.map((item) => (
            <div
              key={item._id}
              className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md"
            >

              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-52 object-cover rounded-xl mb-4"
                />
              )}

              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm mb-4">
                {item.description}
              </p>

              <div className="flex items-center justify-between mb-4 text-[11px] sm:text-xs text-gray-400">
                <span>
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </span>

                {item.updatedAt && (
                  <span>
                    Updated: {new Date(item.updatedAt).toLocaleDateString()}
                  </span>
                )}
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 py-2 text-xs sm:text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex-1 py-2 text-xs sm:text-sm bg-red-600 rounded-lg hover:bg-red-700 transition"
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

export default ManageNews;